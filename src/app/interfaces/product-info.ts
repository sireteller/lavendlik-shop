export interface Category {
  id: number;
  name: string;
  displayName: string;
}

export interface Product {
  id: number;
  name: string;
  displayName: string;
  colors: Color[];
  description: string;
  category: Category;
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
