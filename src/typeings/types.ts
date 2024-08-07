export interface ResultsType {
  id: number;
  name: string;
  Lang: string;
  PreviewLink: string;
  SourceLink: string;
  ProjectLink: string;
  previewDesc: string;
  description: string[];
  poster_path: string;
  features: {
    title: string;
    description: string;
  }[]
}