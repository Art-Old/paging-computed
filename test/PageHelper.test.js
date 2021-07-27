require("mocha");
const chai = require("chai");
const PageHelper = require("../src/PagingHelper");
chai.should();


describe("GetResult()", () => {
    [
        {range: 5, nowPage: 1, maxPage: 20, expected: {pages: [1, 2, 3, 4, 5], prev: false, multiPagePrev: false, multiPageNext: true, next: true}},
        {range: 5, nowPage: 2, maxPage: 20, expected: {pages: [1, 2, 3, 4, 5], prev: true, multiPagePrev: false, multiPageNext: true, next: true}},
        {range: 5, nowPage: 6, maxPage: 20, expected: {pages: [6, 7, 8, 9, 10], prev: true, multiPagePrev: true, multiPageNext: true, next: true}},
        {range: 5, nowPage: 11, maxPage: 20, expected: {pages: [11, 12, 13, 14, 15], prev: true, multiPagePrev: true, multiPageNext: true, next: true}},
        {range: 5, nowPage: 16, maxPage: 20, expected: {pages: [16, 17, 18, 19, 20], prev: true, multiPagePrev: true, multiPageNext: false, next: true}},
        {range: 5, nowPage: 20, maxPage: 20, expected: {pages: [16, 17, 18, 19, 20], prev: true, multiPagePrev: true, multiPageNext: false, next: false}},
        {range: 10, nowPage: 1, maxPage: 30, expected: {pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prev: false, multiPagePrev: false, multiPageNext: true, next: true}},
        {range: 10, nowPage: 2, maxPage: 30, expected: {pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], prev: true, multiPagePrev: false, multiPageNext: true, next: true}},
        {range: 10, nowPage: 11, maxPage: 30, expected: {pages: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], prev: true, multiPagePrev: true, multiPageNext: true, next: true}},
        {range: 10, nowPage: 21, maxPage: 30, expected: {pages: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], prev: true, multiPagePrev: true, multiPageNext: false, next: true}},
        {range: 10, nowPage: 30, maxPage: 30, expected: {pages: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], prev: true, multiPagePrev: true, multiPageNext: false, next: false}},
    ].forEach(d => {
        it(`range:${d.range} page:${d.nowPage}/${d.maxPage}, pages should be:${d.expected.pages.join(",")}`, function () {
            new PageHelper(d.range).GetResult(d.nowPage, d.maxPage).should.be.deep.equal({...d.expected})
        });
    })
})


