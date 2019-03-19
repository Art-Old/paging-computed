class PagingHelper {
  GetPages() {
    return [1, 2, 3, 4, 5, 6, 7];
  }

  IsEnableNext(page, maxPage) {
    if (page >= maxPage) return false;
    return true;
  }

  IsEnableLast(page, maxPage) {
    if (maxPage <= 1 || page <= 1) return false;
    return true;
  }
}

module.exports = PagingHelper;
