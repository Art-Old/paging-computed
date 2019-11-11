// @ts-check

/**
 * 分頁計算Helper
 *
 * @class PagingHelper
 */
class PagingHelper {
  /**
   *Creates an instance of PagingHelper.
   * @memberof PagingHelper
   */
  constructor() {
    this.range = 3;
    this.minPage = 1;
  }

  /**
   * 是否顯示下一頁
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {boolean} True：顯示下一頁 / False：不顯示下一頁
   * @memberof PagingHelper
   */
  IsEnableNext(page, maxPage) {
    if (page >= maxPage) return false;
    return true;
  }

  /**
   * 是否顯示上一頁
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {boolean} True：顯示上一頁 / False：不顯示上一頁
   * @memberof PagingHelper
   */
  IsEnableLast(page, maxPage) {
    if (maxPage <= 1 || page <= 1) return false;
    return true;
  }

  /**
   * 取得分頁資訊
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {number[]} 分頁資訊
   * @memberof PagingHelper
   */
  GetPages(page, maxPage) {
    let count = maxPage <= 6 ? maxPage : 7;
    let result = Array.from(Array(count).keys(), x => x + 1);
    if (count <= 6) return result;

    let mid = this.GetMiddleNumber(page, maxPage);
    result[0] = this.minPage;
    result[1] = this.GetNearNumber(this.minPage, mid - 1);
    result[2] = mid - 1;
    result[3] = mid;
    result[4] = mid + 1;
    result[5] = this.GetNearNumber(mid + 1, maxPage);
    result[6] = maxPage;
    return result;
  }

  /**
   * 取得相鄰數字
   *
   * @param {number} last - 要判斷的數字(小)
   * @param {number} next - 要判斷的數字(大)
   * @returns {number} 回傳相鄰的數字，不相鄰則回傳0
   * @memberof PagingHelper
   */
  GetNearNumber(last, next) {
    return last + 1 === next - 1 ? last + 1 : 0;
  }
  /**
   * 取得分頁陣列中，最中間顯示的數字
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {number} 應顯示的頁碼
   * @memberof PagingHelper
   */
  GetMiddleNumber(page, maxPage) {
    let mid;
    if (page <= 4) {
      mid = this.minPage + this.range;
    } else if (4 <= page && page < maxPage - this.range) {
      mid = page;
    } else {
      mid = maxPage - this.range;
    }
    return mid;
  }
}

// var target = new PagingHelper();
// let result = target.GetPages("1", 10);
// console.log(result)

module.exports = PagingHelper;
