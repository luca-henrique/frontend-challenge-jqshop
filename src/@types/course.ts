import { Module } from "./module";

export interface Course {
  title: string;
  description: string;
  countModules?: number;
  countLessons?: number;
  modules?: Module[];
}