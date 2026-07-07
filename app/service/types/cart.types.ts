interface CartItemData {
  cakeId: string;
  cartId: string;
  createdAt: string;
  price: number;
  quantity: number;
}

interface DecreaseQuantityResponse {
  status: string;
  message: string;
  data: CartItemData;
}
