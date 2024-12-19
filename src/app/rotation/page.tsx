"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation, getChampionData } from "@/utils/riotApi";
import { ChampionDetails, ChampionRotation } from "@/types/ChampionItem";
import Card from "@/components/Card";

const ChampionRotationPage = (): JSX.Element => {
  const { data, isFetching, isError } = useQuery<ChampionDetails[]>({
    queryKey: ["championRotationList"],
    queryFn: async (): Promise<ChampionDetails[]> => {
      const rotation: ChampionRotation = await getChampionRotation();

      const champions: ChampionDetails[] = await Promise.all(
        rotation.freeChampionIds.map((id) => getChampionData(id))
      );

      return champions;
    },
    staleTime: 5 * 60 * 1000,
  });

  if (isFetching) {
    return <div>로딩중입니다.</div>;
  }

  if (isError || !data) {
    return <div>데이터를 가져오는 중 에러가 발생했습니다.</div>;
  }

  const championItems = data.map((champion) => ({
    id: champion.id,
    name: champion.name,
    image: champion.image,
    description: champion.title,
  }));

  return (
    <Card
      title="챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)"
      items={championItems}
      linkPrefix="/champions"
    />
  );
};

export default ChampionRotationPage;
