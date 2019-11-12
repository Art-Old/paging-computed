var mocha = require("mocha");
var chai = require("chai");
chai.should();

var PagingHelper = require("../src/PagingHelper.js");
let sut = null;
beforeEach(() => {
  sut = PagingHelper;
});

describe("GetPages() 少於七個顯示", () => {
  let dataSet = [
    { maxPage: 1, expected: [1] },
    { maxPage: 2, expected: [1, 2] },
    { maxPage: 3, expected: [1, 2, 3] },
    { maxPage: 4, expected: [1, 2, 3, 4] },
    { maxPage: 5, expected: [1, 2, 3, 4, 5] },
    { maxPage: 6, expected: [1, 2, 3, 4, 5, 6] }
  ];
  dataSet.forEach(d => {
    it(`總頁數為 ${d.maxPage}，應回傳 ${d.expected}`, () => {
      let actual = sut.GetPages(1, d.maxPage);
      actual.should.be.deep.equal(d.expected);
    });
  });
});

describe("GetPages()", () => {
  let dataSet = [
    { page: 1, maxPage: 10, expected: [1, 2, 3, 4, 5, 0, 10] },
    { page: 2, maxPage: 10, expected: [1, 2, 3, 4, 5, 0, 10] },
    { page: 3, maxPage: 10, expected: [1, 2, 3, 4, 5, 0, 10] },
    { page: 4, maxPage: 10, expected: [1, 2, 3, 4, 5, 0, 10] },
    { page: 5, maxPage: 10, expected: [1, 0, 4, 5, 6, 0, 10] },
    { page: 6, maxPage: 10, expected: [1, 0, 5, 6, 7, 0, 10] },
    { page: 7, maxPage: 10, expected: [1, 0, 6, 7, 8, 9, 10] },
    { page: 8, maxPage: 10, expected: [1, 0, 6, 7, 8, 9, 10] },
    { page: 9, maxPage: 10, expected: [1, 0, 6, 7, 8, 9, 10] },
    { page: 10, maxPage: 10, expected: [1, 0, 6, 7, 8, 9, 10] }
  ];
  dataSet.forEach(d => {
    it(`頁面 ${d.page}/${d.maxPage}，應回傳${d.expected}`, () => {
      let actual = sut.GetPages(d.page, d.maxPage);
      actual.should.be.deep.equal(d.expected);
    });
  });
});

let dataSet = [
  { page: 1, maxPage: 10, expected: [false, true] },
  { page: 2, maxPage: 10, expected: [true, true] },
  { page: 3, maxPage: 10, expected: [true, true] },
  { page: 4, maxPage: 10, expected: [true, true] },
  { page: 5, maxPage: 10, expected: [true, true] },
  { page: 6, maxPage: 10, expected: [true, true] },
  { page: 7, maxPage: 10, expected: [true, true] },
  { page: 8, maxPage: 10, expected: [true, true] },
  { page: 9, maxPage: 10, expected: [true, true] },
  { page: 10, maxPage: 10, expected: [true, false] }
];

describe("IsEnableLast()", () => {
  dataSet.forEach(d => {
    it(`頁面：${d.page}/${d.maxPage} 時，上一頁按鈕顯示？ ${d.expected[0]}`, () => {
      let actual = sut.IsEnableLast(d.page, d.maxPage);
      actual.should.be.equal(d.expected[0]);
    });
  });
});

describe("IsEnableNext()", () => {
  dataSet.forEach(d => {
    it(` 頁面：${d.page}/${d.maxPage} 時，下一頁按鈕顯示？ ${d.expected[1]}`, () => {
      let actual = sut.IsEnableNext(d.page, d.maxPage);
      actual.should.be.equal(d.expected[1]);
    });
  });
});

describe("GetPagingInfo()", () => {
  let dataSet = [
    { page: 1, maxPage: 10, expected: {pages:[1, 2, 3, 4, 5, 0, 10],isEnableLast:false,isEnableNext:true} },
    { page: 2, maxPage: 10, expected: {pages:[1, 2, 3, 4, 5, 0, 10],isEnableLast:true,isEnableNext:true} },
    { page: 3, maxPage: 10, expected: {pages:[1, 2, 3, 4, 5, 0, 10],isEnableLast:true,isEnableNext:true} },
    { page: 4, maxPage: 10, expected: {pages:[1, 2, 3, 4, 5, 0, 10],isEnableLast:true,isEnableNext:true} },
    { page: 5, maxPage: 10, expected: {pages:[1, 0, 4, 5, 6, 0, 10],isEnableLast:true,isEnableNext:true} },
    { page: 6, maxPage: 10, expected: {pages:[1, 0, 5, 6, 7, 0, 10],isEnableLast:true,isEnableNext:true} },
    { page: 7, maxPage: 10, expected: {pages:[1, 0, 6, 7, 8, 9, 10],isEnableLast:true,isEnableNext:true} },
    { page: 8, maxPage: 10, expected: {pages:[1, 0, 6, 7, 8, 9, 10],isEnableLast:true,isEnableNext:true} },
    { page: 9, maxPage: 10, expected: {pages:[1, 0, 6, 7, 8, 9, 10],isEnableLast:true,isEnableNext:true} },
    { page: 10, maxPage: 10, expected: {pages:[1, 0, 6, 7, 8, 9, 10],isEnableLast:true,isEnableNext:false} }
  ];
  dataSet.forEach(d => {
    it(`取得第 ${d.page} 頁分頁資訊`, () => {
      let actual = sut.GetPagingInfo(d.page, d.maxPage);
      actual.should.be.deep.equal(d.expected);
    });
  })

});
