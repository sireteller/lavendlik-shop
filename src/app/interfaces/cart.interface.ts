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


export interface AddToCartRequest {
  productId: number | null;
  amount?: number | null;
  color?: Color | null;
  size?: Size | null;
};
