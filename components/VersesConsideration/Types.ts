export interface IProps {
  data: {
    id: number;
    text: string;
  }[];
  onSubmitHandler: (body: { text: string }) => Promise<void>;
}
