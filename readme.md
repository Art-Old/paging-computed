## Intro

前端分頁計算的小工具，主要是為了要解決當使用者訪問列表，如何顯示分頁的 ICON，哪一些顯示哪一些不顯示

## Install

```
npm i paging-computed
```

## Example

```js
var PagingHelper = require("paging-computed")
/** 顯示多少個頁碼 */
let range = 10
/** 當前頁碼 */
let nowPage = 1
/** 總共多少頁 */
let maxPage = 30

let {prev, multiPagePrev, pages, multiPageNext, next} = new PageHelper(range).GetResult(nowPage, maxPage)
/**
 * Result Should Be:
 * {
 *      prev: false, 
 *      multiPagePrev: false, 
 *      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
 *      multiPageNext: true, 
 *      next: true
 * }
 */
```
