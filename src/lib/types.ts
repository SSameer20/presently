export interface GenerateResponseData {
  message?: string;
  data?: {
    slides?: [
      {
        title?: string;
        description?: string;
        list?: [string];
      }
    ];
  };
}

export interface Slide {
  title?: string;
  description?: string;
  list?: string[];
}
