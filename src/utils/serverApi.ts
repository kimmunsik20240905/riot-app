export interface ChampionData {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
}

export interface ChampionListResponse {
  [key: string]: ChampionData;
}

export interface ChampionList {
  id: string;
  key: string;
  name: string;
  title: string;
  image: string;
}

export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
  };
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

export interface ItemData {
  id: string;
  name: string;
  plaintext: string;
  image: string;
}

export interface ItemDetail {
  name: string;
  plaintext: string;
  image: {
    full: string;
  };
  description: string;
}

export interface ItemListResponse {
  [key: string]: ItemDetail;
}

// 최신 버전 가져오기
export const getLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json",
      {
        method: "GET",
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      throw new Error("버전 정보를 가져오는 데 실패했습니다.");
    }

    const versions: string[] = await response.json();
    // 가장 처음것이 최신임
    return versions[0];
  } catch (error) {
    console.error("Error fetching latest version:", error);
    throw new Error("최신 버전 정보를 가져오는 중 오류가 발생했습니다.");
  }
};

// 챔피언 데이터를 가져오기
export const getChampionList = async (): Promise<ChampionList[]> => {
  try {
    const latestVersion = await getLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
      {
        method: "GET",
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      throw new Error("챔피언 목록을 가져오는 데 실패했습니다.");
    }

    const data: { data: ChampionListResponse } = await response.json();

    const championList: ChampionList[] = Object.values(data.data).map(
      (champion) => ({
        id: champion.id,
        key: champion.key,
        name: champion.name,
        title: champion.title,
        image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`, // 동일한 이미지 경로
      })
    );

    return championList;
  } catch (error) {
    console.error("Error fetching champion list:", error);
    throw new Error("챔피언 목록 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};

// 상세 정보 가져오기
export const getChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  if (!id || typeof id !== "string") {
    throw new Error("유효하지 않은 챔피언 ID입니다.");
  }

  try {
    const latestVersion = await getLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
      { method: "GET", cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(
        `ID '${id}'에 해당하는 데이터를 가져오는 데 실패했습니다.`
      );
    }

    const data = await response.json();
    const championData = data.data[id];

    if (!championData) {
      throw new Error(`ID '${id}'에 해당하는 챔피언이 존재하지 않습니다.`);
    }

    return {
      id: championData.id,
      name: championData.name,
      title: championData.title,
      lore: championData.lore,
      image: {
        full: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg`,
      },
      info: championData.info,
    };
  } catch (error) {
    console.error(`Error fetching champion details for ID: ${id}`, error);
    throw new Error("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};

export const fetchItemList = async (): Promise<ItemData[]> => {
  try {
    const latestVersion = await getLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("아이템 목록을 가져오는 데 실패했습니다.");
    }

    const data: { data: ItemListResponse } = await response.json();
    // 데이터를 ItemData[]로 변환
    const itemList: ItemData[] = Object.entries(data.data).map(
      ([key, item]) => ({
        id: key,
        name: item.name,
        plaintext: item.plaintext,
        image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`,
      })
    );

    return itemList;
  } catch (error) {
    console.error("Error fetching item list:", error);
    throw new Error("아이템 목록 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};

export const getItemDetail = async (id: string): Promise<ItemDetail> => {
  if (!id || typeof id !== "string") {
    throw new Error("유효하지 않은 아이템 ID입니다.");
  }

  try {
    const latestVersion = await getLatestVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(
        `아이템 ID '${id}'에 해당하는 데이터를 가져오는 데 실패했습니다.`
      );
    }

    const data: { data: Record<string, ItemDetail> } = await response.json();

    // ID로 특정 아이템 데이터 가져오기
    const item = data.data[id];

    if (!item) {
      throw new Error(`ID '${id}'에 해당하는 아이템이 존재하지 않습니다.`);
    }

    // 필요한 데이터 반환
    return {
      name: item.name,
      plaintext: item.plaintext || "설명이 없습니다.", // 간략 설명 없으면 기본값
      image: {
        full: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`,
      },
      description: item.description,
    };
  } catch (error) {
    console.error("Error fetching item detail:", error);
    throw new Error("아이템 상세 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};
