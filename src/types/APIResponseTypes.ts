export interface CarDetailResponse {
  id: string;
  year: string;
  price: number;
  color: string;
  location: string;
  description?: string;
  brand: Brand;
  model: Model;
  images?: string[];
}

export interface Brand {
  name: string;
  id: string;
}

export interface Model {
  name: string;
  id: string;
}

/* export type Car = {
  id: string;
  year: string;
  price: number;
  color: string;
  location: string;
  description?: string;
  brand: string;
  model: string;
  image?: string;
}; */

export interface CarResponse
  extends Omit<CarDetailResponse, "brand" | "model" | "images"> {
  model: string;
  brand: string;
  image?: string;
}
