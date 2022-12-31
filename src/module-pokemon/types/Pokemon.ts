export interface BaseRequestModel {
  search?: string;
}

export type PaginableData<T> = {
  data: T[];

  first?: boolean;
  last?: boolean;
  pageSize?: number;
  totalPage: number;
  totalRecords: number;
};


export type PokemonListRequest = BaseRequestModel & {
  pageSize?: number;
  pageNumber: number
}

export type ApiPokemonListRequest = BaseRequestModel & {
  offset: number;
  limit: number;
}

export interface PokemonListResponse {
  id: number;
  name: string
}

export interface ApiPokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string
  }>
}