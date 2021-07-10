var mocha = require("mocha");
var chai = require("chai");
chai.should();

var PagingHelper = require("../src/PagingHelper.js");
const testData =  [
  { page: 1, maxPage: 1, expected: {pages:['1'],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 2, expected: {pages:['1', '2'],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 3, expected: {pages:['1', '2', '3',],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 4, expected: {pages:['1', '2', '3', '4',],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 5, expected: {pages:['1', '2', '3', '4', '5'],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 6, expected: {pages:['1', '2', '3', '4', '5','6'],isEnableLast:false,isEnableNext:false} },
  { page: 1, maxPage: 10, expected: {pages:['1', '2', '3', '4', '5', '…', '10'],isEnableLast:false,isEnableNext:true} },
  { page: 2, maxPage: 10, expected: {pages:['1', '2', '3', '4', '5', '…', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 3, maxPage: 10, expected: {pages:['1', '2', '3', '4', '5', '…', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 4, maxPage: 10, expected: {pages:['1', '2', '3', '4', '5', '…', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 5, maxPage: 10, expected: {pages:['1', '…', '4', '5', '6', '…', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 6, maxPage: 10, expected: {pages:['1', '…', '5', '6', '7', '…', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 7, maxPage: 10, expected: {pages:['1', '…', '6', '7', '8', '9', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 8, maxPage: 10, expected: {pages:['1', '…', '6', '7', '8', '9', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 9, maxPage: 10, expected: {pages:['1', '…', '6', '7', '8', '9', '10'],isEnableLast:true,isEnableNext:true} },
  { page: 10, maxPage: 10, expected: {pages:['1', '…', '6', '7', '8', '9', '10'],isEnableLast:true,isEnableNext:false} }
];


let sut = null;

beforeEach(() => {
  sut = new PagingHelper({
    range:3,
    minPage:1,
    limitPagesCount:7
  });
});

describe("GetPages()", () => {
  testData.forEach(d => {
    it(`頁面 ${d.page}/${d.maxPage}，應回傳 [${d.expected.pages}]`, () => {
      let actual = sut.GetPages(d.page, d.maxPage);
      actual.should.be.deep.equal(d.expected.pages);
    });
  });
});


describe("IsEnableLast()", () => {
  testData.forEach(d => {
    it(`頁面：${d.page}/${d.maxPage} 時，上一頁按鈕顯示？ ${d.expected.isEnableLast}`, () => {
      let actual = sut.IsEnableLast(d.page, d.maxPage);
      actual.should.be.equal(d.expected.isEnableLast);
    });
  });
});

describe("IsEnableNext()", () => {
  testData.forEach(d => {
    it(` 頁面：${d.page}/${d.maxPage} 時，下一頁按鈕顯示？ ${d.expected.isEnableNext}`, () => {
      let actual = sut.IsEnableNext(d.page, d.maxPage);
      actual.should.be.equal(d.expected.isEnableNext);
    });
  });
});

describe("GetPagingInfo()", () => {
  testData.forEach(d => {
    it(`取得第 ${d.page} 頁分頁資訊`, () => {
      let actual = sut.GetPagingInfo(d.page, d.maxPage);
      actual.should.be.deep.equal(d.expected);
    });
  });
});
