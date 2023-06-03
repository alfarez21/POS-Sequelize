import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';
import Transaction from './Transaction';

interface CustomerAttributes {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  deleted: boolean;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public id!: number;
  public name!: string;
  public phone!: string;
  public email!: string;
  public address!: string;
  public deleted!: boolean;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'customers',
    timestamps: true,
    sequelize,
  }
);

Customer.hasMany(Transaction, { foreignKey: 'customer_id' });
Transaction.belongsTo(Customer, { foreignKey: 'customer_id' });

export default Customer;
