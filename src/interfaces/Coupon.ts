
interface CouponAttributes {
  id?: number;
  code?: string;
  discount?: number;
  discount_type?: 'percentage' | 'price';
  expired_date?: Date;
  type?: number;
  minimum_purchase?: number;
  maximum_usage?: number;
  active?: number;
  deleted?: boolean;
}

export {
  CouponAttributes
}