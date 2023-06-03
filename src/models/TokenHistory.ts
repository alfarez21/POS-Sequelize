import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface TokenHistoryAttributes {
  id: number;
  balance: number;
  token: number;
  deleted: boolean;
}

interface TokenHistoryCreationAttributes extends Optional<TokenHistoryAttributes, 'id'> {}

class TokenHistory extends Model<TokenHistoryAttributes, TokenHistoryCreationAttributes> implements TokenHistoryAttributes {
  public id!: number;
  public balance!: number;
  public token!: number;
  public deleted!: boolean;
}

TokenHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'token_histories',
    timestamps: true,
    sequelize,
  }
);

export default TokenHistory;
