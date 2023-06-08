import { Op } from "sequelize";
import Category from "../models/Category";

class CategoryManager {
  /**
   * * CREATE CATEGORY *
   * ANCHOR Create Category
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
   * ANCHOR Get Categories
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
   * ANCHOR Get Categories as Json
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
   * ANCHOR Get Categories With Criteria
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
   * ANCHOR Get Categories With Criteria as Json
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
   * ANCHOR Get Category By Id
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
   * ANCHOR Get Category By Id as Json
   * @description function for getting category by id as json
   * @param id : number
   */
  public static async getCategoryByIdJson(id: number): Promise<any | null> {
    const category = await this.getCategoryById(id);
    return category ? category.toJSON() : null;    
  }

  /**
   * * GET CATEGORY BY NAME *
   * ANCHOR Get Category By Name
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
   * ANCHOR Get Category By Name as Json
   * @description function for getting category by name as json
   * @param name : string
   */
  public static async getCategoryByNameJson(name: string): Promise<any | null> {
    const category = await this.getCategoryByName(name);
    return category ? category.toJSON() : null;    
  }

  /**
   * * SEARCH CATEGORIES *
   * ANCHOR Search Categories
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
   * ANCHOR Search Categories as Json
   * @description function for search categories as json
   * @param params : { keyword: string, page?: number, pageSize?: number }
   */
  public static async searchCategoriesJson(params: {
    keyword: string, page?: number, pageSize?: number
  }): Promise<Category[]> {
    const categories = await this.searchCategories(params)
    return categories.map((category) => category.toJSON());
  }

  /**
   * * UPDATE CATEGORY BY ID *
   * ANCHOR Update Category By Id
   * @description function for updating category by id
   * @param id : number
   * @param data : { name: string, icon?: string }
   */
  public static async updateCategoryById(
    id: number, data: { name: string, icon?: string }
  ) {
    const category = await this.getCategoryById(id);
    if (category) {
      category.name = data.name.trim();
      category.icon = data.icon ? data.icon.trim() : '';
      await category.save();
    }
    return category;
  }

  /**
   * * DELETE CATEGORY BY ID *
   * ANCHOR Delete Category By Id
   * @description function for deleting category by id
   * @param id : number
   */
  public static async deleteCategoryById(id: number) {
    const category = await this.getCategoryById(id);
    if (category) {
      category.deleted = true;
      await category.save();
    }
    return category;
  }

  /**
   * * DELETE MULTIPLE CATEGORIES BY IDS *
   * ANCHOR Delete Multiple Categories By Ids
   * @description function for deleting multiple categories by ids
   * @param ids : number[]
   */
  public static async deleteMultipleCategoriesByIds(ids: number[]) {
    if (ids.length > 0) {
      await Category.update(
        { deleted: true },
        {
          where: {
            id: {
              [Op.in]: ids,
            },
          },
        }
      );
    }
  
    const categories = await Category.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
  
    return categories;
  }  

  /**
   * * HARD DELETE CATEGORY BY ID *
   * ANCHOR Hard Delete Category By Id
   * @description function for hard deleting category by id
   * @param id : number
   */
  public static async hardDeleteCategoryById(id: number) {
    const category = await this.getCategoryById(id);
    if (category) {
      await category.destroy();
    }
    return category;
  }

  /**
   * * HARD DELETE MULTIPLE CATEGORIES BY IDS *
   * ANCHOR Hard Delete Multiple Categories By Ids
   * @description function for hard deleting multiple categories by ids
   * @param ids : number[]
   */
  public static async hardDeleteMultipleCategoriesByIds(ids: number[]) {
    if (ids.length > 0) {
      await Category.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
    }
  }
}

export default CategoryManager;