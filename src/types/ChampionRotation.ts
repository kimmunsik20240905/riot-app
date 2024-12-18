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
