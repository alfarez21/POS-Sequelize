import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';
import TransactionProduct from './TransactionProduct';
import ProductReturn from './ProductReturn'
import Coupon from './Coupon';
import User from './User';
import Product from './Product'
import Customer from './Customer';


interface TransactionAttributes {
  id: number;
  customer_id: number;
  user_id: number;
  coupon_id: number;
  discount: number;
  discount_type: 'price' | 'percentage';
  order_number: string;
  ref_number: string;
  tax: number;
  total: number;
  sub_total: number;
  payment_type: number;
  payment_info: string;
  paid: number;
  change: number;
  status: boolean;
  token_cut_balance: number;
  description: string;
  deleted: boolean;
}

interface TransactionCreationAttributes extends Optional<TransactionAttributes, 'id'> {}

class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
  public id!: number;
  public customer_id!: number;
  public user_id!: number;
  public coupon_id!: number;
  public discount!: number;
  public discount_type!: 'price' | 'percentage';
  public order_number!: string;
  public ref_number!: string;
  public tax!: number;
  public total!: number;
  public sub_total!: number;
  public payment_type!: number;
  public payment_info!: string;
  public paid!: number;
  public change!: number;
  public status!: boolean;
  public token_cut_balance!: number;
  public description!: string;
  public deleted!: boolean;
}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_type: {
      type: DataTypes.ENUM('price', 'percentage'),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    ref_number: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sub_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    change: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    token_cut_balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'transactions',
    timestamps: true,
    sequelize,
  }
);

Transaction.hasMany(TransactionProduct, { foreignKey: 'transaction_id' });
TransactionProduct.belongsTo(Transaction, { foreignKey: 'transaction_id' });

Transaction.belongsToMany(Product, { through: TransactionProduct, foreignKey: 'transaction_id' });
Product.belongsToMany(Transaction, { through: TransactionProduct, foreignKey: 'product_id' });

Transaction.belongsTo(Coupon, { foreignKey: 'coupon_id' });
Coupon.hasMany(Transaction, { foreignKey: 'coupon_id' });

Transaction.hasMany(ProductReturn, { foreignKey: 'transaction_id' });
ProductReturn.belongsTo(Transaction, { foreignKey: 'transaction_id' });

Transaction.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Transaction, { foreignKey: 'user_id' });

Transaction.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Transaction, { foreignKey: 'customer_id' });

export default Transaction;
