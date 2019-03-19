class PagingHelper {
  constructor() {
    this.range = 3;
    this.minPage = 1;
  }
  IsEnableNext(page, maxPage) {
    if (page >= maxPage) return false;
    return true;
  }

  IsEnableLast(page, maxPage) {
    if (maxPage <= 1 || page <= 1) return false;
    return true;
  }
  GetPages(page, maxPage) {
    let result = Array.from(Array(7).keys(), x => x + 1);
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
   * 取得相鄰的數字，不相鄰則回傳0
   *
   * @param {*} last
   * @param {*} next
   * @returns
   * @memberof PagingHelper
   */
  GetNearNumber(last, next) {
    return last + 1 === next - 1 ? last + 1 : 0;
  }
  /**
   * 取得中間的數字
   *
   * @param {*} page
   * @param {*} maxPage
   * @returns
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

module.exports = PagingHelper;
