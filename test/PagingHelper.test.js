var mocha = require("mocha");
var chai = require("chai");
chai.should();

var PagingHelper = require("../src/PagingHelper.js");
let sut = null;
beforeEach(() => {
  sut = new PagingHelper();
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
    it(`頁面：${d.page}/${d.maxPage} 時，上一頁按鈕顯示？ ${
      d.expected[0]
    }`, () => {
      let actual = sut.IsEnableLast(d.page, d.maxPage);
      actual.should.be.equal(d.expected[0]);
    });
  });
});

describe("IsEnableNext()", () => {
  dataSet.forEach(d => {
    it(` 頁面：${d.page}/${d.maxPage} 時，下一頁按鈕顯示？ ${
      d.expected[1]
    }`, () => {
      let actual = sut.IsEnableNext(d.page, d.maxPage);
      actual.should.be.equal(d.expected[1]);
    });
  });
});
