import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface SettingAttributes {
  id: number;
  app: string;
  store: string;
  address_one: string;
  address_two: string;
  contact: string;
  tax: string;
  currency_symbol: string;
  percentage: number;
  footer: string;
  image: string;
  token_balance: number;
  token_cut_balance: number;
}

interface SettingCreationAttributes extends Optional<SettingAttributes, 'id'> {}

class Setting extends Model<SettingAttributes, SettingCreationAttributes> implements SettingAttributes {
  public id!: number;
  public app!: string;
  public store!: string;
  public address_one!: string;
  public address_two!: string;
  public contact!: string;
  public tax!: string;
  public currency_symbol!: string;
  public percentage!: number;
  public footer!: string;
  public image!: string;
  public token_balance!: number;
  public token_cut_balance!: number;
}

Setting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    app: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    store: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_one: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    address_two: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contact: {
      type: DataTypes.STRING(14),
      allowNull: true,
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currency_symbol: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    footer: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    token_balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    token_cut_balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    tableName: 'setting',
    timestamps: true,
    sequelize,
  }
);

export default Setting;
