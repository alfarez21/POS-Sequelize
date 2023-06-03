import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface StockOpnameAttributes {
  id: number;
  product_id: number;
  initial_stock: number;
  date: Date;
  sales: number;
  incoming_goods: number;
  returned_goods: number;
  final_stock: number;
  actual_stock: number;
  deleted: boolean;
}

interface StockOpnameCreationAttributes extends Optional<StockOpnameAttributes, 'id'> {}

class StockOpname extends Model<StockOpnameAttributes, StockOpnameCreationAttributes> implements StockOpnameAttributes {
  public id!: number;
  public product_id!: number;
  public initial_stock!: number;
  public date!: Date;
  public sales!: number;
  public incoming_goods!: number;
  public returned_goods!: number;
  public final_stock!: number;
  public actual_stock!: number;
  public deleted!: boolean;
}

StockOpname.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    initial_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    incoming_goods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    returned_goods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    final_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actual_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'stock_opname',
    timestamps: true,
    sequelize,
  }
);

export default StockOpname;
