import { Color, Product, Size } from './product-info.interface';

export interface Cart {
  id: number;
  items: CartItem[];
  openPreview?: boolean;
  totalPrice: number;
}

export interface CartItem {
  amount: number;
  color: Color;
  id: number;
  product: Product;
  size: Size;
  totalPrice: number;
}
