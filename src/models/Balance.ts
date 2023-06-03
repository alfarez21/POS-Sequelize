import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';
import User from './User';

interface BalanceAttributes {
  id: number;
  user_id: number;
  opening: number;
  closing: number;
  deleted: boolean;
}

interface BalanceCreationAttributes extends Optional<BalanceAttributes, 'id'> {}

class Balance extends Model<BalanceAttributes, BalanceCreationAttributes> implements BalanceAttributes {
  public id!: number;
  public user_id!: number;
  public opening!: number;
  public closing!: number;
  public deleted!: boolean;
}

Balance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    opening: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    closing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'balance',
    timestamps: true,
    sequelize,
  }
);

Balance.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Balance, { foreignKey: 'user_id' });

export default Balance;
