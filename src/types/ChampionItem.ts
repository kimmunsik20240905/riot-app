export interface ChampionRotation {
  freeChampionIds: number[];
}

export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface ChampionData {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
}

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

export interface ItemCard {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface PageProps {
  params: {
    id: string;
  };
}

export interface ChampionItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface CardProps {
  title: string;
  items: {
    id: string;
    name: string;
    image: string;
    description?: string;
  }[];
  linkPrefix: string;
}
