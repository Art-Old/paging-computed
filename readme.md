## Intro

前端分頁計算的小工具，主要是為了要解決當使用者訪問列表，如何顯示分頁的 ICON，哪一些顯示哪一些不顯示

## Github

https://github.com/Art-Old/paging-computed

## Example

```javascript
var paging = require("paging-computed");

var nowPage = 1;
var maxPage = 10;

// 取得當前分頁資訊
var pagingInfo = paging.GetPagingInfo(nowPage, maxPage);
console.log(pagingInfo); //  { isEnableLast: false, isEnableNext: true, pages: [ 1, 2, 3, 4, 5, 0, 10 ] }

// 當然你也可以分開呼叫
// 取得當前分頁資料
var pages = paging.GetPages(nowPage, maxPage);
console.log(pages); // [ 1, 2, 3, 4, 5, 0, 10 ]

// 上一頁按鈕是否 Enable
var isEnableLast = paging.IsEnableLast(nowPage, maxPage);
console.log(isEnableLast); //false

// 下一頁按鈕是否 Enable
var isEnableNext = paging.IsEnableNext(nowPage, maxPage);
console.log(isEnableNext); //true
```
