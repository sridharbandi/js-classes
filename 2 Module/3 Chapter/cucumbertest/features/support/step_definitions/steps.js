import { Given, When, Then } from '@cucumber/cucumber';
import {assert} from 'chai';


Given('the two numbers are {int} and {int}', function (num1, num2) {
   this.setValues(num1, num2)
});


Then('the result should be {int}', function (result) {
    assert.equal(this.result(), result)
});