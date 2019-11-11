## Intro

前端分頁計算的小工具，主要是為了要解決當使用者訪問列表，如何顯示分頁的 ICON，哪一些顯示哪一些不顯示

## 使用說明

將`/src/PagingHelper.js`載入後，呼叫`GetPages(nowPage,maxPage)`即可得到一陣列，用來輸出分頁的 ICON

數字為 0，用來表示`...`的刪節號
其餘數字表示應顯示該數字的頁面連結

若有需要顯示上一頁、下一頁，也可透過`IsEnableNext()`、`IsEnableLast()`取得結果

```javascript
var target = new PagingHelper();
let result = target.GetPages("1", 10);
console.log(result); // [ 1, 2, 3, 4, 5, 0, 10 ]
```

## 測試

利用 mocha 即可進行測試

```
npm test
```
