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

export interface ProjectsDataType {
  title: string;
  date: string;
  lang: string;
  thumbnail: string;
  source: string;
  preview: string;
  live: string;
}

export interface ProjectsDataTypeHTML {
  title: string;
  date: string;
  contentHtml: string;
  lang: string;
  thumbnail: string;
  source: string;
  preview: string;
  live: string;
}