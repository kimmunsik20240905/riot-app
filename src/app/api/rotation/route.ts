import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API KEY 없음" }, { status: 500 });
  }

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "응답이 없습니다." },
        { status: response.status }
      );
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "챔피언 로테이션 정보를 가져오는데 실패하였습니다." },
      { status: 500 }
    );
  }
}
