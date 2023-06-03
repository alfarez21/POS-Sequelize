import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface CouponAttributes {
  id: number;
  code: string;
  discount: number;
  discount_type: 'percentage' | 'price';
  expired_date: Date;
  type: number;
  minimum_purchase: number;
  maximum_usage: number;
  active: number;
  deleted: boolean;
}

interface CouponCreationAttributes extends Optional<CouponAttributes, 'id'> {}

class Coupon extends Model<CouponAttributes, CouponCreationAttributes> implements CouponAttributes {
  public id!: number;
  public code!: string;
  public discount!: number;
  public discount_type!: 'percentage' | 'price';
  public expired_date!: Date;
  public type!: number;
  public minimum_purchase!: number;
  public maximum_usage!: number;
  public active!: number;
  public deleted!: boolean;
}

Coupon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_type: {
      type: DataTypes.ENUM('percentage', 'price'),
      allowNull: false,
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minimum_purchase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maximum_usage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'coupons',
    timestamps: true,
    sequelize,
  }
);

export default Coupon;
