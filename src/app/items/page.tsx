import { fetchItemList } from "@/utils/serverApi";
import { ItemCard, ItemData } from "@/types/ChampionItem";
import Card from "@/components/Card";

const ItemsPage = async (): Promise<JSX.Element> => {
  const items: ItemData[] = await fetchItemList();

  const itemCards: ItemCard[] = items.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    description: item.plaintext,
  }));

  return <Card title="아이템 목록" items={itemCards} linkPrefix="/items" />;
};

export default ItemsPage;
