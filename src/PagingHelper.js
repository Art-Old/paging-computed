/**
 * @typedef {Object} pagingInfo 分頁資訊
 * @property {boolean} pagingInfo.prev 是否啟用上一頁？
 * @property {boolean} pagingInfo.multiPagePrev 是否啟用往前跳頁？
 * @property {number[]} pagingInfo.pages 當前頁碼需要顯示的分頁頁碼
 * @property {boolean} pagingInfo.multiPageNext 是否啟用往後跳頁？
 * @property {boolean} pagingInfo.next 是否啟用下一頁？
 */


class PageHelper {
    constructor(range = 10) {
        this._range = range
    }

    _enablePrev(nowPage) {
        return nowPage !== 1
    }

    _enableNext(nowPage, maxPage) {
        return nowPage !== maxPage
    }

    _enableMultiPagePrev(nowPage, maxPage) {
        let currentPages = this._getPages(nowPage, maxPage)
        return currentPages[0] - this._range > 0
    }

    _enableMultiPageNext(nowPage, maxPage) {
        let currentPages = this._getPages(nowPage, maxPage)
        return currentPages[currentPages.length - 1] < maxPage
    }

    /**
     * 取得分頁資訊
     * @param {number} nowPage 當前頁碼
     * @param {number} maxPage 最大頁碼
     * @returns {pagingInfo} 分頁資訊
     */
    GetResult(nowPage, maxPage) {
        return {
            prev: this._enablePrev(nowPage),
            multiPagePrev: this._enableMultiPagePrev(nowPage, maxPage),
            pages: this._getPages(nowPage, maxPage),
            multiPageNext: this._enableMultiPageNext(nowPage, maxPage),
            next: this._enableNext(nowPage, maxPage)
        }
    }

    _getPages(nowPage, maxPage) {
        let result;
        if (nowPage / this._range < 1) {
            result = [...Array(this._range + 1).keys()].slice(1)
        } else {
            let start = (Math.ceil(nowPage / this._range) - 1) * this._range + 1
            result = [...Array(this._range).keys()].map(x => x + start)
        }
        return result.filter(x => x <= maxPage)
    }


}

module.exports = PageHelper