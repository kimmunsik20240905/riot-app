import { PageProps } from "@/types/ChampionItem";
import { getChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const champion = await getChampionDetail(params.id);

  return {
    title: `${champion.title}`,
    description: champion.lore.slice(0, 150),
  };
};

const ChampionDetailPage = async ({
  params,
}: PageProps): Promise<JSX.Element> => {
  const champion = await getChampionDetail(params.id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{champion.name}</h1>
      <p className="text-xl text-gray-600">{champion.title}</p>
      <Image
        src={champion.image.full}
        alt={champion.name}
        layout="responsive"
        width={1200}
        height={800}
        className="mt-6 rounded-lg shadow-lg"
      />
      <p className="mt-4 leading-relaxed">{champion.lore}</p>
      <h2 className="text-2xl font-semibold mt-8">스탯</h2>
      <ul className="list-disc list-inside">
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
