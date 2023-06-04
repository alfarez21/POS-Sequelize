import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

interface CategoryAttributes {
  id: number;
  name: string;
  icon: string;
  deleted: boolean;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;
  public icon!: string;
  public deleted!: boolean;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(125),
      allowNull: false,
      validate: {
        len: {
          args: [1, 20], 
          msg: 'Category name must be between 1 and 20 characters',
        },
        notEmpty: {
          msg: 'Category name cannot be empty',
        },
      }
    },
    icon: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        len: {
          args: [0, 10], 
          msg: 'The icon must not exceed 10 characters.',
        },
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'categories',
    timestamps: true,
    underscored: true,
    sequelize,
  }
);

export default Category;
