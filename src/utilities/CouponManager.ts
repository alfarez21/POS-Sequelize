import { Op, WhereOptions } from "sequelize";
import Coupon from "../models/Coupon";
import { CouponAttributes } from "../interfaces/Coupon";

class CouponManager {
  /**
   * * CREATE COUPON *
   * ANCHOR Create Coupon
   * @description function for creating new coupon
   * @param data : CouponAttributes
   */
  public static async createCoupon(data: CouponAttributes): Promise<Coupon> {
    const coupon = await Coupon.create(data);
    return coupon;
  }

  /**
   * * GET COUPONS *
   * ANCHOR Get Coupons
   * @description function for getting all coupon
   */
  public static async getCoupons(
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Coupon[]> {
    const { page = 1, pageSize =  20 } = pagination || {} ;
    const offset = (page - 1) * pageSize;
    const coupons = await Coupon.findAll({
      where: { deleted: false },
      limit: pageSize,
      offset: offset,
    });
    return coupons;
  }

  /**
   * * GET COUPONS AS JSON *
   * ANCHOR Get Coupons as Json
   * @description function for getting all coupon as json 
   */
  public static async getCouponsJson(
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Coupon[]> {
    const coupon = await this.getCoupons(pagination);
    return coupon.map((coupon) => coupon.toJSON());
  }

  /**
   * * GET COUPONS WITH CRITERIA *
   * ANCHOR Get Coupons With Criteria
   * @description function for getting all coupon with criteria
   * @param criteria : CouponAttributes
   */
  public static async getCouponsWithCriteria(
    criteria: CouponAttributes,
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Coupon[]> {
    const { page = 1, pageSize =  20 } = pagination || {} ;
    const offset = (page - 1) * pageSize;
    const coupons = await Coupon.findAll({
      where: { ...criteria },
      limit: pageSize,
      offset: offset,
    });
    return coupons;
  }

  /**
   * * GET COUPONS WITH CRITERIA AS JSON *
   * ANCHOR Get Coupons With Criteria as Json
   * @description function for getting all Coupon with criteria as json
   * @param criteria : { name: string, deleted: boolean }
   */
  public static async getCouponsWithCriteriaJson(
    criteria: CouponAttributes,
    pagination : { page? : number, pageSize?: number } | null = null
  ): Promise<Coupon[]> {
    const coupons = await this.getCouponsWithCriteria(criteria, pagination);
    return coupons;
  }

  /**
   * * GET COUPON BY ID *
   * ANCHOR Get Coupon By Id
   * @description function for getting coupon by id
   * @param id : number
   */
  public static async getCouponById(id: number): Promise<Coupon | null> {
    const coupon = await Coupon.findOne({
      where: { id, deleted: false },
    });
    return coupon;
  }

   /**
   * * GET COUPON BY ID AS JSON *
   * ANCHOR Get Coupon By Id as Json
   * @description function for getting Coupon by id as json
   * @param id : number
   */
  public static async getCouponByIdJson(id: number): Promise<any | null> {
    const Coupon = await this.getCouponById(id);
    return Coupon ? Coupon.toJSON() : null;    
  }

  /**
   * * SEARCH COUPONS *
   * ANCHOR Search Coupons
   * @description function for search coupons
   * @param params : { keyword: string, page?: number, pageSize?: number }
   */
  public static async searchCoupons(params: {
    keyword: string, page?: number, pageSize?: number
  }): Promise<Coupon[]> {
    const { keyword, page = 1, pageSize = 20 } = params;
    const offset = (page - 1) * pageSize;
    const coupons = await Coupon.findAll({
      where: {
        [Op.or]: [
          {
            code: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            discount_type: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            expired_date: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            type: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            minimum_purchase: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
        ],
      } as WhereOptions<CouponAttributes>,
      limit: pageSize,
      offset: offset,
    });

    return coupons;
  }

  /**
   * * SEARCH COUPONS AS JSON *
   * ANCHOR Search Coupons as Json
   * @description function for search coupons as json
   * @param params : { keyword: string, page?: number, pageSize?: number }
   */
  public static async searchCouponsJson(params: {
    keyword: string, page?: number, pageSize?: number
  }): Promise<Coupon[]> {
    const coupons = await this.searchCouponsJson(params)
    return coupons.map((coupon) => coupon.toJSON());
  }

  /**
   * * UPDATE COUPON BY ID *
   * ANCHOR Update Coupon By Id
   * @description function for updating coupon by id
   * @param id : number
   * @param data : CouponAttributes
   */
  public static async updateCouponById(id: number, data: CouponAttributes) {
    const coupon = await this.getCouponById(id);
    await coupon?.update(data);
    return coupon;
  }
  

  /**
   * * DELETE COUPON BY ID *
   * ANCHOR Delete Coupon By Id
   * @description function for deleting coupon by id
   * @param id : number
   */
  public static async deleteCouponById(id: number) {
    const coupon = await this.getCouponById(id);
    if (coupon) {
      coupon.deleted = true;
      await coupon.save();
    }
    return coupon;
  }

  /**
   * * DELETE MULTIPLE COUPONS BY IDS *
   * ANCHOR Delete Multiple Coupons By Ids
   * @description function for deleting multiple coupons by ids
   * @param ids : number[]
   */
  public static async deleteMultipleCouponsByIds(ids: number[]) {
    if (ids.length > 0) {
      await Coupon.update(
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
  
    const categories = await Coupon.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
  
    return categories;
  }  

  /**
   * * HARD DELETE COUPON BY ID *
   * ANCHOR Hard Delete Coupon By Id
   * @description function for hard deleting coupon by id
   * @param id : number
   */
  public static async hardDeleteCouponById(id: number) {
    const coupon = await this.getCouponById(id);
    if (coupon) {
      await coupon.destroy();
    }
    return coupon;
  }

  /**
   * * HARD DELETE MULTIPLE COUPONS BY IDS *
   * ANCHOR Hard Delete Multiple Coupons By Ids
   * @description function for hard deleting multiple coupons by ids
   * @param ids : number[]
   */
  public static async hardDeleteMultipleCouponssByIds(ids: number[]) {
    if (ids.length > 0) {
      await Coupon.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
    }
  }
}

export default CouponManager;