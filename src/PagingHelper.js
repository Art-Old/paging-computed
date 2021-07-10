
class PagingHelper {
  constructor({range,minPage,limitPagesCount}) {
    /** 中間相鄰頁碼連結數量 */
    this.range = range,
    /** 最小頁碼 */
    this.minPage = minPage,
    /** 分頁連結數量 */
    this.limitPagesCount = limitPagesCount
  }

    
  /** 取得頁碼中間數字 */
  _GetMiddleNumber(page, maxPage)  {
    const isSmallerThanPageCountHalf = page => page <= Math.ceil(this.limitPagesCount / 2)
    const isBiggerThanPageCountHalf = page => page > Math.floor(this.limitPagesCount / 2)
    const isSmallerThanMaxPageRange = page => page <= maxPage - this.range
    const isBiggerThanMaxPageRange = page => page > maxPage - this.range

    if (isSmallerThanPageCountHalf(page)) return this.minPage + this.range
    if (isBiggerThanPageCountHalf(page) && isSmallerThanMaxPageRange(page)) return page
    if (isBiggerThanMaxPageRange(page)) return maxPage - this.range
  }

  /** 取得相鄰頁碼數字 */
  _GetNearNumber(last, next) {
    return last + 1 === next - 1 ? last + 1 : '…'
  }

  /**
   * 取得分頁資訊
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {string[]} 分頁資訊
   */
  GetPages(page, maxPage) {
    let count = maxPage < this.limitPagesCount ? maxPage : this.limitPagesCount
    let result = Array.from(Array(count).keys(), x => x + 1) 
    if (count < this.limitPagesCount) return result.map(x=>x.toString())

    // 取得中間數
    let mid = this._GetMiddleNumber(page, maxPage) 
    let midIndex = Math.floor(this.limitPagesCount / 2)

    for (let index = 0; index < this.limitPagesCount; index++) {
      if (index === 0) result[index] = this.minPage 
      if (index < midIndex - 1 && index !== 0) result[index] = this._GetNearNumber(this.minPage, mid - 1)
      if (index === midIndex - 1) result[index] = mid - 1
      if (index === midIndex) result[index] = mid
      if (index === midIndex + 1) result[index] = mid + 1
      if (index > midIndex + 1 && index !== this.limitPagesCount - 1) result[index] = this._GetNearNumber(mid + 1, maxPage);
      if (index === this.limitPagesCount - 1) result[index] = maxPage;
    }
    return result.map(x=>x.toString())
  }

    
  /**
   * 是否顯示上一頁
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {boolean} True：顯示上一頁 / False：不顯示上一頁
   */
  IsEnableLast(page, maxPage) {
    return !(maxPage <= 1 || page <= 1)
  }

  /**
   * 是否顯示下一頁
   *
   * @param {number} page - 目前頁數
   * @param {number} maxPage - 最大頁數
   * @returns {boolean} True：顯示下一頁 / False：不顯示下一頁
   */
  IsEnableNext(page, maxPage) {
    //最大頁數未超出限制頁數
    if (maxPage < this.limitPagesCount) return false;

    return !(page >= maxPage)
  }

    
  /**
   * 取得分頁資訊
   * @param {number} nowPage 目前頁數
   * @param {number} maxPage 最大頁數
   */
  GetPagingInfo(nowPage, maxPage) {
    return {
      isEnableLast: this.IsEnableLast(nowPage, maxPage),
      isEnableNext: this.IsEnableNext(nowPage, maxPage),
      pages: this.GetPages(nowPage, maxPage)
    }
  }
}

module.exports = PagingHelper