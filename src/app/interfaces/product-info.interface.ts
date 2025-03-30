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
  images: Image[];
  name: string;
  price: number;
  sizes: Size[];
  subcategory: Subcategory;
}

export interface Color {
  id: number;
  name: string;
  hexCode: string;
}

export interface Image {
  id: number;
  imageUrl: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface Subcategory {
  id: number;
  name: string;
}
