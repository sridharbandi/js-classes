import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect, assert } from 'chai';

let arr;

Before( () =>  {
    console.log('This prints before all steps')
})

Given('array is empty', function () {
    console.log('array is empty')
    arr = [];
});

Then('length of an array is {int}', function (len) {
    console.log(`length of an array is ${len}`)
    expect(arr).to.have.lengthOf(len)
});

When('array is loaded with {int}, {int}, {int}', function (num1, num2, num3) {
    console.log(`array is loaded`)
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);
});

After(function () {
    console.log('This prints after all steps')
})