import * as he from 'he';

class Utilities {
  /**
   * * SANITIZE DATA *
   * @description Function for sanitize data
   * @param obj : Data to be sanitized
   * @returns Sanitized data
   */
  public static sanitize(obj: any): any {
    if (typeof obj === 'string') {
      return he.escape(obj);
    } else if (Array.isArray(obj)) {
      return obj.map((item) => this.sanitize(item));
    } else if (typeof obj === 'object') {
      const sanitizedObj: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          sanitizedObj[key] = this.sanitize(obj[key]);
        }
      }
      return sanitizedObj;
    }
    return obj;
  }
    
}

export default Utilities;