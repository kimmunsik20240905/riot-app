import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/types/ChampionItem";

const Card = ({ title, items, linkPrefix }: CardProps): JSX.Element => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map((item) => (
          <Link href={`${linkPrefix}/${item.id}`} key={item.id}>
            <div className="flex flex-col h-full border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                layout="responsive"
                priority
              />
              <div className="p-2 text-center flex flex-col items-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                {item.description && (
                  <p className="text-sm text-gray-500">{item.description}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
