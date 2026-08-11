export interface Cake {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  inStock: number;
  isAvailable: boolean;
  coverImage: string | null;
  publicId: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CakesResponse {
  status: string;
  total: number;
  data: Cake[];
  page: number;
  limit: number;
}

export interface CakeCardProp {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  price: number;
  onAddToCart?: (cake: {}) => void;
  isClickable?: boolean;
}
