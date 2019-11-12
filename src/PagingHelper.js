// @ts-check
const range = 3; // 中間相鄰頁碼連結數量
const minPage = 1; // 最小頁碼
const limitPagesCount = 7; // 分頁連結數量

/**
 * 取得分頁資訊
 *
 * @param {number} page - 目前頁數
 * @param {number} maxPage - 最大頁數
 * @returns {number[]} 分頁資訊
 */
function GetPages(page, maxPage) {
  let count = maxPage < limitPagesCount ? maxPage : limitPagesCount;
  let result = Array.from(Array(count).keys(), x => x + 1);
  if (count < limitPagesCount) return result;

  // 取得中間數
  let mid = GetMiddleNumber(page, maxPage);
  let midIndex = Math.floor(limitPagesCount / 2);

  for (let index = 0; index < limitPagesCount; index++) {
    if (index === 0) result[index] = minPage;
    if (index < midIndex - 1 && index !== 0)
      result[index] = GetNearNumber(minPage, mid - 1);
    if (index === midIndex - 1) result[index] = mid - 1;
    if (index === midIndex) result[index] = mid;
    if (index === midIndex + 1) result[index] = mid + 1;
    if (index > midIndex + 1 && index !== limitPagesCount - 1)
      result[index] = GetNearNumber(mid + 1, maxPage);
    if (index === limitPagesCount - 1) result[index] = maxPage;
  }
  return result;
}
/**
 * 取得分頁陣列中，最中間顯示的數字
 *
 * @param {number} page - 目前頁數
 * @param {number} maxPage - 最大頁數
 * @returns {number} 應顯示的頁碼
 */
function GetMiddleNumber(page, maxPage) {
  let result;

  if (page <= Math.ceil(limitPagesCount / 2)) {
    result = minPage + range;
  } else if (Math.floor(limitPagesCount / 2) < page && page < maxPage - range) {
    result = page;
  } else {
    result = maxPage - range;
  }
  return result;
}
/**
 * 取得相鄰數字
 *
 * @param {number} last - 要判斷的數字(小)
 * @param {number} next - 要判斷的數字(大)
 * @returns {number} 回傳相鄰的數字，不相鄰則回傳0
 */
function GetNearNumber(last, next) {
  return last + 1 === next - 1 ? last + 1 : 0;
}

/**
 * 是否顯示下一頁
 *
 * @param {number} page - 目前頁數
 * @param {number} maxPage - 最大頁數
 * @returns {boolean} True：顯示下一頁 / False：不顯示下一頁
 */
function IsEnableNext(page, maxPage) {
  //最大頁數未超出限制頁數
  if (maxPage < limitPagesCount) return false;

  return !(page >= maxPage);
}

/**
 * 是否顯示上一頁
 *
 * @param {number} page - 目前頁數
 * @param {number} maxPage - 最大頁數
 * @returns {boolean} True：顯示上一頁 / False：不顯示上一頁
 */
function IsEnableLast(page, maxPage) {
  return !(maxPage <= 1 || page <= 1);
}
/**
 * 取得分頁資訊
 * @param {number} nowPage 目前頁數
 * @param {number} maxPage 最大頁數
 */
function GetPagingInfo(nowPage, maxPage) {
  return {
    isEnableLast: IsEnableLast(nowPage, maxPage),
    isEnableNext: IsEnableNext(nowPage, maxPage),
    pages: GetPages(nowPage, maxPage)
  };
}
module.exports = {
  GetPages: GetPages,
  IsEnableNext: IsEnableNext,
  IsEnableLast: IsEnableLast,
  GetPagingInfo: GetPagingInfo
};
