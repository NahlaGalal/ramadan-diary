export interface IDaysProps {
  day: number;
  setDay: (val: number) => void;
}

export interface IBoxProps {
  data: {
    id: number;
    text: string;
    startTime?: string;
    endTime?: string;
  }[];
  header: string;
}
