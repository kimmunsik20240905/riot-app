import { fetchItemList } from "@/utils/serverApi";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
  const items = await fetchItemList();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map((item) => (
          <Link
            href={`/items/${item.id}`}
            key={item.id}
            className="block border rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="mx-auto mt-4"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.plaintext}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
