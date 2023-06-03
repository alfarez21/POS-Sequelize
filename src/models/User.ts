import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';
import Transaction from './Transaction';
import Balance from './Balance'

interface UserAttributes {
  id: number;
  username: string;
  full_name: string;
  password: string;
  permissions: string;
  deleted: boolean;
  status: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public full_name!: string;
  public password!: string;
  public permissions!: string;
  public deleted!: boolean;
  public status!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(125),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(123),
      allowNull: false,
    },
    permissions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    sequelize,
  }
);

User.hasMany(Transaction, { foreignKey: 'user_id' });
Transaction.belongsTo(User, { foreignKey: 'user_id' });

Balance.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Balance, { foreignKey: 'user_id' });

export default User;
