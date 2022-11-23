export const data: {
  id: number;
  text: string;
  startTime?: string;
  endTime?: string;
  type: "todo" | "doing" | "done";
}[] = [
  {
    id: 10,
    text: "أزور اقاربي",
    startTime: "6 مساءً",
    endTime: "7 مساءً",
    type: "todo",
  },
  {
    id: 2,
    text: "أزور اقاربي",
    startTime: "6 مساءً",
    type: "todo",
  },
  {
    id: 3,
    text: "أزور اقاربي",
    type: "todo",
  },
  {
    id: 4,
    text: "أزور اقاربي",
    startTime: "6 مساءً",
    endTime: "7 مساءً",
    type: "doing",
  },
  {
    id: 5,
    text: "أزور اقاربي",
    type: "done",
  },
];