import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 챔피언 목록 보기 */}
        <Link href="/champions">
          <div className=" rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://www.techm.kr/news/photo/202102/80676_78101_2347.jpg"
              alt="챔피언 목록"
              width={400}
              height={250}
              layout="responsive"
              priority
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">챔피언 목록 보기</h2>
            </div>
          </div>
        </Link>

        {/* 금주 로테이션 확인 */}
        <Link href="/rotation">
          <div className=" rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://thumb.zumst.com/530x0/https://static.news.zumst.com/images/126/2023/11/19/3f569822fe7741d78f880e485e7c7037.jpg"
              alt="금주 로테이션"
              width={400}
              height={250}
              layout="responsive"
              priority
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">금주 로테이션 확인</h2>
            </div>
          </div>
        </Link>

        {/* 아이템 목록 보기 */}
        <Link href="/items">
          <div className=" rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e28b2fc66a2474f7ff04c60aad36cd16a371afbf-1920x1080.jpg"
              alt="아이템 목록"
              width={400}
              height={250}
              layout="responsive"
              priority
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">아이템 목록 보기</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
