import { Op } from "sequelize";
import { Setting }  from "../models/Setting";
import { SettingAttributes } from "../interfaces/Setting";


class SettingManager {
  /**
   * * GET SETTING *
   * ANCHOR Get Setting
   * @description to getting setting data
   */
  public static async getSetting(){
    const setting = await Setting.findOne();
    return setting;
  }

  /**
   * * GET SETTING AS JSON *
   * ANCHOR Get Setting as JSON
   * @description to getting setting data
   */
  public static async getSettingJson() {
    const setting = await Setting.findOne();
    return setting?.toJSON();
  }
  

  /**
   * * UPDATE SETTING *
   * ANCHOR Update Setting
   * @description to update setting data 
   * @param data : SettingAttributes
   */
  public static async updateSetting(data: SettingAttributes) {
    const setting = await Setting.findOne();
    if(setting) {
      await setting.update(data);
      return setting;
    } else {
      const newSetting = await Setting.create(data);
      return newSetting;
    }
  }
}

export default SettingManager;