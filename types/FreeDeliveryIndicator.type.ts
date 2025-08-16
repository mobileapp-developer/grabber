export type FreeDeliveryIndicatorProps = {
  amountLeft?: number;
  cartTotal?: number;
  cartCount?: number;
  freeDeliveryThreshold?: number;
  onGoToCart: () => void;
};