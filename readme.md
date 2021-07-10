## Intro

前端分頁計算的小工具，主要是為了要解決當使用者訪問列表，如何顯示分頁的 ICON，哪一些顯示哪一些不顯示
因為已滿足專案需求，主要只是為了練習NPM套件發布，所以未來應該不會再更新

如果有要使用請注意，專案僅針對當前狀況寫死，如果要寫活的，整個都要改，如果不符需求，建議還是重寫比較快

## Install

```
npm i paging-computed
```

## Example

```javascript
var PagingHelper = require("./src/PagingHelper.js");
const paging = new PagingHelper({
    range:3,
    minPage:1,
    limitPagesCount:7
})

let nowPage = 1
let maxPage = 10

// 取得當前分頁資訊
var pagingInfo = paging.GetPagingInfo(nowPage, maxPage);
console.log(pagingInfo); //  { isEnableLast: false, isEnableNext: true, pages: [ '1', '2', '3', '4', '5', '…', '10' ] } 

// 當然你也可以分開呼叫
// 取得當前分頁資料
var pages = paging.GetPages(nowPage, maxPage);
console.log(pages); // [ '1', '2', '3', '4', '5', '…', '10' ] 

// 上一頁按鈕是否 Enable
var isEnableLast = paging.IsEnableLast(nowPage, maxPage);
console.log(isEnableLast); //false

// 下一頁按鈕是否 Enable
var isEnableNext = paging.IsEnableNext(nowPage, maxPage);
console.log(isEnableNext); //true
```
