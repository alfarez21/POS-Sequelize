import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface ProductReturnAttributes {
  id: number;
  product_id: number;
  transaction_id: number;
}

interface ProductReturnCreationAttributes extends Optional<ProductReturnAttributes, 'id'> {}

class ProductReturn extends Model<ProductReturnAttributes, ProductReturnCreationAttributes> implements ProductReturnAttributes {
  public id!: number;
  public product_id!: number;
  public transaction_id!: number;
}

ProductReturn.init(
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
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'product_return',
    timestamps: true,
    sequelize,
  }
);

export default ProductReturn;
