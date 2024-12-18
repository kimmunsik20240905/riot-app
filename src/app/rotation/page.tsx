"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation, getChampionData } from "@/utils/riotApi";
import { ChampionDetails, ChampionRotation } from "@/types/ChampionRotation";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  // export default function Page() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["championRotationList"],
    queryFn: async (): Promise<{
      rotation: ChampionRotation;
      champions: ChampionDetails[];
    }> => {
      // 로테이션 데이터 가져오기
      const rotation = await getChampionRotation();

      // 아이디로 챔피언 목록 가져오기
      const champions = await Promise.all(
        rotation.freeChampionIds.map((id) => getChampionData(id))
      );

      return { rotation, champions };
    },
    staleTime: 5 * 60 * 1000,
  });

  if (isPending) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>데이터를 가져오는 중 에러가 발생했습니다.</div>;
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const { champions } = data;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {champions.map((champion) => (
          <Link href={`/champions/${champion.id}`} key={champion.id}>
            <div className="flex flex-col h-full border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={champion.image}
                alt={champion.name}
                width={200}
                height={200}
                layout="responsive"
                priority
              />
              <div className="p-2 text-center flex flex-col items-center">
                <h2 className="text-lg font-semibold">{champion.name}</h2>
                <p className="text-sm text-gray-500">{champion.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;
