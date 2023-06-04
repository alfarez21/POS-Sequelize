import { Op } from "sequelize";
import Category from "../models/Category";

class CategoryManager {
  /**
   * * CREATE CATEGORY *
   * @description function for creating new category
   * @param data : { name: string, icon: string }
   */
  public static async createCategory(data: {
    name: string, icon?: string 
  }): Promise<Category> {
    const category = await Category.create({
      deleted: false,
      name: data.name.trim(),
      icon: data.icon ? data.icon.trim() : ''
    });
    return category;
  }

  /**
   * * GET CATEGORIES *
   * @description function for getting all category
   */
  public static async getCategories(
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Category[]> {
    const { page = 1, pageSize =  20 } = pagination || {} ;
    const offset = (page - 1) * pageSize;
    const categories = await Category.findAll({
      where: { deleted: false },
      limit: pageSize,
      offset: offset,
    });
    return categories;
  }

  /**
   * * GET CATEGORIES AS JSON *
   * @description function for getting all category as json 
   */
  public static async getCategoriesJson(
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Category[]> {
    const categories = await this.getCategories(pagination);
    return categories.map((category) => category.toJSON());
  }

  /**
   * * GET CATEGORIES WITH CRITERIA *
   * @description function for getting all category with criteria
   * @param criteria : { name: string, deleted: boolean }
   */
  public static async getCategoriesWithCriteria(
    criteria: { name?: string, deleted?: boolean },
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Category[]> {
    const { page = 1, pageSize =  20 } = pagination || {} ;
    const offset = (page - 1) * pageSize;
    const categories = await Category.findAll({
      where: criteria,
      limit: pageSize,
      offset: offset,
    });
    return categories;
  }

  /**
   * * GET CATEGORIES WITH CRITERIA AS JSON *
   * @description function for getting all category with criteria as json
   * @param criteria : { name: string, deleted: boolean }
   */
  public static async getCategoriesWithCriteriaJson(
    criteria: { name?: string, deleted?: boolean },
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Category[]> {
    const categories = await this.getCategoriesWithCriteria(criteria, pagination);
    return categories;
  }

  /**
   * * GET CATEGORY BY ID *
   * @description function for getting category by id
   * @param id : number
   */
  public static async getCategoryById(id: number): Promise<Category | null> {
    const category = await Category.findOne({
      where: { id, deleted: false },
    });
    return category;
  }

   /**
   * * GET CATEGORY BY ID AS JSON *
   * @description function for getting category by id as json
   * @param id : number
   */
  public static async getCategoryByIdJson(id: number): Promise<any | null> {
    const category = await this.getCategoryById(id);
    return category ? category.toJSON() : null;    
  }

  /**
   * * GET CATEGORY BY NAME *
   * @description function for getting category by name
   * @param name : string
   */
  public static async getCategoryByName(name: string): Promise<Category | null> {
    const category = await Category.findOne({
      where: { name, deleted: false },
    });
    return category;
  }

   /**
   * * GET CATEGORY BY NAME AS JSON *
   * @description function for getting category by name as json
   * @param name : string
   */
  public static async getCategoryByNameJson(name: string): Promise<any | null> {
    const category = await this.getCategoryByName(name);
    return category ? category.toJSON() : null;    
  }

  /**
   * * SEARCH CATEGORIES *
   * @description function for search categories
   * @param params : { keyword: string, page?: number, pageSize?: number }
   */
  public static async searchCategories(params: {
    keyword: string, page?: number, pageSize?: number
  }): Promise<Category[]> {
    const { keyword, page = 1, pageSize = 20 } = params;
    const offset = (page - 1) * pageSize;
    const categories = await Category.findAll({
      where: {
        deleted: false,
        name: {
          [Op.like]: `%${keyword}%`,
        },
      },
      limit: pageSize,
      offset: offset,
    });
    return categories;
  }

  /**
   * * SEARCH CATEGORIES AS JSON *
   * @description function for search categories as json
   * @param params : { keyword: string, page?: number, pageSize?: number }
   */
  public static async searchCategoriesJson(params: {
    keyword: string, page?: number, pageSize?: number
  }): Promise<Category[]> {
    const categories = await this.searchCategories(params)
    return categories.map((category) => category.toJSON());
  }
}

export default CategoryManager;