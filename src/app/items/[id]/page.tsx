import { getItemDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

interface ItemDetailPageProps {
  params: {
    id: string;
  };
}

// 페이지 메타데이터 설정
export async function generateMetadata({
  params,
}: ItemDetailPageProps): Promise<Metadata> {
  const item = await getItemDetail(params.id);

  return {
    title: `${item.name}`,
    description: item.description.slice(0, 150),
  };
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  // 서버 사이드에서 아이템 상세 정보 가져오기
  const item = await getItemDetail(params.id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
      <Image
        src={item.image.full}
        alt={item.name}
        width={100}
        height={100}
        className="mt-6 rounded-lg shadow-lg"
      />
      <p className="mt-4 leading-relaxed">{item.plaintext}</p>
      <p
        className="mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></p>
    </div>
  );
}
