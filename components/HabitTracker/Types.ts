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
  dragStartHandler: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dropHandler: (
    e: React.DragEvent<HTMLDivElement>,
    type: "todo" | "doing" | "done"
  ) => void;
  type: "todo" | "doing" | "done";
}
