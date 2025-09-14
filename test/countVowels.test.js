// negative case
// no vowels
// plrt = 0
// empty string
// "" = 0


const countTest = require("../countVowels");


describe("the count on vowel function ", function () {

    test("should return the total count of vowels in the word", function () {
        let str = "hello";
        let received = countTest.countVowels(str);
        let expected = 2;
        expect(received).toEqual(expected);
    });

    test("should return the total count of vowels in the word when the string is in uppercase ", function () {
        let str = "Elephant";
        let received = countTest.countVowels(str);
        let expected = 3;
        expect(received).toEqual(expected);
    });

    test("should return the total count of vowels in the sentence", function () {
        let str = "The sky is the limit";
        let received = countTest.countVowels(str);
        let expected = 5;
        expect(received).toEqual(expected);
    });

    test("should return 0 when there is no vowels in the word", function () {
        let str = "sky";
        let received = countTest.countVowels(str);
        let expected = 0;
        expect(received).toEqual(expected);
    });

    test("should return 0 when there is empty space in the string", function () {
        let str = "";
        let received = countTest.countVowels(str);
        let expected = 0;
        expect(received).toEqual(expected);
    });

    test("should return 0 when number is given instead of string", function () {
        let str = 22;
        let received = countTest.countVowels(str);
        let expected = 0;
        expect(received).toEqual(expected);
    });

    test("should return 0 when boolean value true is given instead of string", function () {
        let str = true;
        let received = countTest.countVowels(str);
        let expected = 0;
        expect(received).toEqual(expected);
    });

    test("should return 0 when boolean value false is given instead of string", function () {
        let str = false;
        let received = countTest.countVowels(str);
        let expected = 0;
        expect(received).toEqual(expected);
    });

    test("should return undefined when no value is given", function () {
        let received = countTest.countVowels();
        let expected = undefined;
        expect(received).toEqual(expected);
    });

});




