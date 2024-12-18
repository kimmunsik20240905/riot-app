import { getChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const champions = await getChampionList();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">챔피언 목록</h1>
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

export default page;
