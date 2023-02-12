export interface ReactChildren {
  children: React.ReactNode
}

export type Modifier<T> = (target: T) => void;

export const StarList = [1, 2, 3, 4, 5] as const;
export type Star = typeof StarList[number]

export type ID = string;
export type Day = {
  id: ID;
  date: string;
  description: string;
  rate?: Star;
};

export type SelectedDay = Day | null