import {
  ChampionData,
  ChampionDetails,
  ChampionRotation,
} from "@/types/ChampionItem";

// 로테이션 데이터 가져오기
export const getChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error("챕피언 로테이션 정보를 가져오는데 실패하였습니다.");
  }

  return response.json();
};

//최신 버전 가져오기
const getLatestVersion = async (): Promise<string> => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  if (!response.ok) {
    throw new Error("데이터 드래곤 버전의 정보를 가져오는데 실패하였습니다.");
  }
  const versions: string[] = await response.json();
  // 가장 처음것이 최신임
  return versions[0];
};

// 챔피언 데이터를 가져오기
export const getChampionData = async (
  championId: number
): Promise<ChampionDetails> => {
  const latestVersion = await getLatestVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
  );

  if (!response.ok) {
    throw new Error("챔피언 데이터를 찾을 수 없습니다.");
  }

  const champions = await response.json();
  // 챔피언 데이터 배열로 변환
  const championList: ChampionData[] = Object.values(champions.data);

  // ID로 매칭된 챔피언 찾기
  const champion = championList.find(
    (champ) => parseInt(champ.key, 10) === championId
  );

  if (!champion) {
    throw new Error(`챔피언을 찾을 수 없습니다.`);
  }

  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`,
  };
};
