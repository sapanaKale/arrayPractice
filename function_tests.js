const library = require ('./functionsLibrary.js');
const assert = require ('assert');

//test for function  which inserts value to given index in array
const insertArrayElement = library.insertArrayElement;
assert.deepEqual(insertArrayElement([1,2,3,4,5,6],4,1),[1,2,3,4,1,5,6]);
assert.deepEqual(insertArrayElement([1,2,3,4,5,6],0,0),[0,1,2,3,4,5,6]);
assert.deepEqual(insertArrayElement([1,2,3,4,5,6],6,7),[1,2,3,4,5,6,7]);

//test for function which removes first occurence of given value from given source array
const removeFirstOccurence = library.removeFirstOccurence;
assert.deepEqual(removeFirstOccurence([1,2,3,4,5,6],2),[1,3,4,5,6]);
assert.deepEqual(removeFirstOccurence([1,2,3,4,5,6],4),[1,2,3,5,6]);

//test for function which gives even numbers from given source array
const filterEvenNumbers = library.filterEvenNumbers;
assert.deepEqual(filterEvenNumbers([2]),[2]);
assert.deepEqual(filterEvenNumbers([1]),[]);
assert.deepEqual(filterEvenNumbers([2,4]),[2,4]);
assert.deepEqual(filterEvenNumbers([1,2]),[2]);
assert.deepEqual(filterEvenNumbers([2,3,4,,"a",5,7]),[2,4]);
assert.deepEqual(filterEvenNumbers([1,2,-3,-4,-8,1,5]),[2,-4,-8]);


//test for function which gives odd numbers from given source array
const filterOddNumbers = library.filterOddNumbers;
assert.deepEqual(filterOddNumbers([1]),[1]);
assert.deepEqual(filterOddNumbers([2]),[]);
assert.deepEqual(filterOddNumbers([1,3]),[1,3]);
assert.deepEqual(filterOddNumbers([1,2]),[1]);
assert.deepEqual(filterOddNumbers([2,3,4,,"a",5,7]),[3,5,7]);
assert.deepEqual(filterOddNumbers([2,3,4,-1,"a",-5,-7]),[3,-1,-5,-7]);

//test for function which gives sum of all elements of array
const calculateSum = library.calculateSum;
assert.deepEqual(calculateSum([]),0);
assert.deepEqual(calculateSum([1]),1);
assert.deepEqual(calculateSum([1,2]),3);
assert.deepEqual(calculateSum([1,-2,3,4]),6);
assert.deepEqual(calculateSum([6,-7]),-1);

//test for function which give reversed array
const reverseArray = library.reverseArray;
assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1]),[1]);
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([1,-2,-3]),[-3,-2,1]);
assert.deepEqual(reverseArray([1,'a',3,,'b']),['b',undefined,3,'a',1]);

//test for function which gives array of every second element of given array
const selectEverySecondElement = library.selectEverySecondElement;
assert.deepEqual(selectEverySecondElement([1]),[]);
assert.deepEqual(selectEverySecondElement([1,2]),[2]);
assert.deepEqual(selectEverySecondElement([1,"",3]),[""]);
assert.deepEqual(selectEverySecondElement([1,2,3,4,5,6,7,8]),[2,4,6,8]);
assert.deepEqual(selectEverySecondElement(['a','b','c','d']),['b','d']);
assert.deepEqual(selectEverySecondElement(['a',,3,"",,]),[undefined,""]);

//test for function which gives array of fibonacci series of given length in reverse order.
const generateReverseFibonacci = library.generateReverseFibonacci;
assert.deepEqual(generateReverseFibonacci(0),[]);
assert.deepEqual(generateReverseFibonacci(1),[0]);
assert.deepEqual(generateReverseFibonacci(2),[1,0]);
assert.deepEqual(generateReverseFibonacci(3),[1,1,0]);
assert.deepEqual(generateReverseFibonacci(6),[5,3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8),[13,8,5,3,2,1,1,0]);

//test for function which gives maxium number of an array

const findMax = library.findMax;
assert.deepEqual(findMax([1]),1);








