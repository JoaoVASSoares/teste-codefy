export type TStatus = "Alive" | "Dead" | "unknown";
export type TGender = "Male" | "Female" | "Genderless" | "unknown";

export type TFilter = {
  status?: string;
  query?: string;
};

export type TFatchCharacters = {
  pageNumber: number;
  status: string | null;
  query: string | null;
};

export type TTranslationType = "origins" | "genders" | "status" | "system" | "title" | "pagination" | "dimension" | "type";
