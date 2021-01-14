import { Given, When, Then } from '@cucumber/cucumber'
import { expect, assert } from 'chai'

Given('this is some pre-req', function () {
    console.log('This is a background step')
});

Given('number is {int}', function (num) {
    this.init(num)
});

When('number is incremented by {int}', function (num) {
    this.increment(num)
});

Then('number should be {int}', function (num) {
    expect(this.getNum()).to.equal(num)
});

Given('Numbers are', function (dt) {
    //console.log(dt.rows())
    //console.log(dt.raw())
    console.log(dt.hashes())

    let books = dt.hashes();
    let filter = books.filter(book => book.author=='Sri');
    console.log(filter.length)
});


Given('my number is {float}', function (num) {
    console.log(num)
});

Given('username is {string}', function (username) {
    console.log(username)
});

Given('some data is {}', function (data) {
    console.log(data)
});

Given('I have {int} rupe(s)', function (money) {
    console.log(money)
});

Given('I have black color sandles/shoes', function () {

});