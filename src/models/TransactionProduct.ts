import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface TransactionProductAttributes {
  id: number;
  transaction_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

interface TransactionProductCreationAttributes extends Optional<TransactionProductAttributes, 'id'> {}

class TransactionProduct extends Model<TransactionProductAttributes, TransactionProductCreationAttributes> implements TransactionProductAttributes {
  public id!: number;
  public transaction_id!: number;
  public product_id!: number;
  public quantity!: number;
  public price!: number;
}

TransactionProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: 'transaction_products',
    timestamps: true,
    sequelize,
  }
);

export default TransactionProduct;
