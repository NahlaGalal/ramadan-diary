export interface ITopicsProps {
  topics: {
    id: number;
    name: string;
  }[];
  currentTopic: number;
  setTopic: (num: number) => void;
}

export interface IZkrProps {
  id: number;
  num: number;
  text: string;
  isOdd: boolean;
}
