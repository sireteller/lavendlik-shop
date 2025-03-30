import { Color, Product, Size } from './product-info.interface';

export interface Cart {
  id: number;
  items: CartItem[];
}

export interface CartItem {
  amount: number;
  color: Color;
  id: number;
  product: Product;
  size: Size;
}
