import { getChampionList } from "@/utils/serverApi";
import { ChampionItem, ChampionList } from "@/types/ChampionItem";
import Card from "@/components/Card";

const ChampionsPage = async (): Promise<JSX.Element> => {
  const champions: ChampionList[] = await getChampionList();

  const championItems: ChampionItem[] = champions.map((champion) => ({
    id: champion.id,
    name: champion.name,
    image: champion.image,
    description: champion.title,
  }));

  return (
    <Card title="챔피언 목록" items={championItems} linkPrefix="/champions" />
  );
};

export default ChampionsPage;
