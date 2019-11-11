## Intro

前端分頁計算的小工具，主要是為了要解決當使用者訪問列表，如何顯示分頁的 ICON，哪一些顯示哪一些不顯示

## Method

### GetPages(nowPage,maxPage)

取得當前分頁資料

```javascript
var paging = require("paging-computed");
var pages = paging.GetPages(1, 10);
console.log(pages); // [ 1, 2, 3, 4, 5, 0, 10 ]
```

### IsEnableLast

上一頁按鈕是否 Enable

```javascript
var isEnableLast = paging.IsEnableLast(1, 10);
console.log(isEnableLast); //false
```

### IsEnableNext(nowPage,maxPage)

下一頁按鈕是否 Enable

```javascript
var isEnableNext = paging.IsEnableNext(1, 10);
console.log(isEnableNext); //true
```
