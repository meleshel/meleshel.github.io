
import { assert } from "chai";
/* import from functions.ts module-- note the .js extension (even though actual file is .ts */

import { isVowel } from "../src/isVowel.js";
import {checkprime} from "../src/checkprime.js";
import {computeSalesCommission} from "../src/computeSalesCommission.js";
import {compoundInterest} from "../src/compoundInterest.js";

import {calcDistance} from "../src/calcDistance.js";
//for calculating distance

describe("calculate distance", function () {
    it("the distance from(0,0) to (5,5):", function () {
        let dist=calcDistance(0,0,5,5);
    assert.equal(+dist.toFixed(2), 7.07);
    });
});


import {convertFahrenheit} from "../src/convertFahrenheit.js";
//for converting to fahrenheight


    describe("convert to fahrenheight", function () {
        it("convert 32 to fahrenheight", function () {
        assert.equal(convertFahrenheit(32), 0);
        });
        it("convert 0 to fahrenheight", function () {
        assert.equal(convertFahrenheit(50), 10);
        });
        it("convert 212 to fahrenheight", function () {
        assert.equal(convertFahrenheit(-40), -40);
        });

        it("convert 100 to fahrenheight", function () {
            let temp=convertFahrenheit(100)
        assert.equal(+temp.toFixed(2), 37.78);
        }); 
    });


import {sumDigits} from "../src/sumDigits.js";
//for summing digits


describe("sum digits", function () {
    it("sum digits 1234", function () {
    assert.equal(sumDigits(1234), 10);
    });
    it("sum digits 102", function () {
    assert.equal(sumDigits(102), 3);
    });
    it("sum digits 8", function () {
    assert.equal(sumDigits(8), 8);
    });
     
});



import {multiDigits} from "../src/multiDigits.js";
//for multiplying digits



describe("multiply digits", function () {
    it("product of digits 1234", function () {
    assert.equal(multiDigits(1234), 24);
    });
    it("product of digits 102", function () {
    assert.equal(multiDigits(102), 0);
    });
    it("product of digits 8", function () {
    assert.equal(multiDigits(8), 8);
    });
     
});

import {calcDownpayment} from "../src/calcDownPayment.js";
//for calculating down payment

describe("calcDownpayment", function () {
    it("downpayment of 40000 is:", function () {
    assert.equal(calcDownpayment(40000), 2000);
    });
    it("downpayment of 50000 is:", function () {
    assert.equal(calcDownpayment(50000), 2500);
    });
    it("downpayment of 100000 is:", function () {
    assert.equal(calcDownpayment(100000), 7500);
    });
    it("downpayment of 250000 is:", function () {
        assert.equal(calcDownpayment(250000), 25000);
        });
     
});

    //for checking vowels
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });

   //for checking primes

   describe("checkPrime returns true if argument is prime", function () {
    it("37 is prime", function () {
   assert.strictEqual(checkprime(37), true);
   });
   it(" 77 is not prime", function () {
   assert.strictEqual(checkprime(77), false);
   });
   });

   //for computing sales

   describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });

    //for computing compound interest

     describe("compoundInterest", function () {
    it("the compound interest of the values(100,10,1)", function () {
        const inter=compoundInterest(100,0.10,1);
    assert.strictEqual(+inter.toFixed(2), 110.47);
    });
    it("the compound interest of the values(10000,5,10)", function () {
        const inter=compoundInterest(200,0.15,2);
    assert.strictEqual(+inter.toFixed(2), 269.47);
    });
  });


