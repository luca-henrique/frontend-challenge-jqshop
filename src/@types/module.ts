import { Lesson } from "./lesson";

export interface Module {
  id: string,
  title: string;
  description: string;
  lessons?: Lesson[];
}