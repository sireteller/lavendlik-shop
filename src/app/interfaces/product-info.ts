export interface Category {
  displayName: string;
  id: number;
  name: string;
}

export interface Product {
  category: Category;
  colors: Color[];
  description: string;
  id: number;
  name: string;
  price: number;
  subcategory: Subcategory;
}

export interface Color {
  id: number;
  name: string;
  hexCode: string;
}

export interface Subcategory {
  id: number;
  name: string;
}
