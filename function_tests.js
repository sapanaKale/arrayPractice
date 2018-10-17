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

//test for function which returns even numbers from given source array
const filterEvenNumbers = library.filterEvenNumbers;
assert.deepEqual(filterEvenNumbers([2]),[2]);
assert.deepEqual(filterEvenNumbers([1]),[]);
assert.deepEqual(filterEvenNumbers([2,4]),[2,4]);
assert.deepEqual(filterEvenNumbers([1,2]),[2]);
assert.deepEqual(filterEvenNumbers([2,3,4,,"a",5,7]),[2,4]);
assert.deepEqual(filterEvenNumbers([1,2,-3,-4,-8,1,5]),[2,-4,-8]);


//test for function which returns odd numbers from given source array
const filterOddNumbers = library.filterOddNumbers;
assert.deepEqual(filterOddNumbers([1]),[1]);
assert.deepEqual(filterOddNumbers([2]),[]);
assert.deepEqual(filterOddNumbers([1,3]),[1,3]);
assert.deepEqual(filterOddNumbers([1,2]),[1]);
assert.deepEqual(filterOddNumbers([2,3,4,,"a",5,7]),[3,5,7]);
assert.deepEqual(filterOddNumbers([2,3,4,-1,"a",-5,-7]),[3,-1,-5,-7]);

//test for function which returns sum of all elements of array
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

//test for function which returns array of every second element of given array
const selectEverySecondElement = library.selectEverySecondElement;
assert.deepEqual(selectEverySecondElement([1]),[]);
assert.deepEqual(selectEverySecondElement([1,2]),[2]);
assert.deepEqual(selectEverySecondElement([1,"",3]),[""]);
assert.deepEqual(selectEverySecondElement([1,2,3,4,5,6,7,8]),[2,4,6,8]);
assert.deepEqual(selectEverySecondElement(['a','b','c','d']),['b','d']);
assert.deepEqual(selectEverySecondElement(['a',,3,"",,]),[undefined,""]);

//test for function which returns array of fibonacci series of given length in reverse order.
const generateReverseFibonacci = library.generateReverseFibonacci;
assert.deepEqual(generateReverseFibonacci(0),[]);
assert.deepEqual(generateReverseFibonacci(1),[0]);
assert.deepEqual(generateReverseFibonacci(2),[1,0]);
assert.deepEqual(generateReverseFibonacci(3),[1,1,0]);
assert.deepEqual(generateReverseFibonacci(6),[5,3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(8),[13,8,5,3,2,1,1,0]);

//test for function which returns maxium number of an array

const findGratestNumber = library.findGratestNumber;
assert.deepEqual(findGratestNumber([1]),1);
assert.deepEqual(findGratestNumber([1,2]),2);
assert.deepEqual(findGratestNumber([0,1,2,3,4]),4);
assert.deepEqual(findGratestNumber([1,2,-3,-5,]),2);
assert.deepEqual(findGratestNumber([-2,-3,-4,-6]),-2);

//test for function which returns smallest number of an array

const findSmallestNumber = library.findSmallestNumber;
assert.deepEqual(findSmallestNumber([1]),1);
assert.deepEqual(findSmallestNumber([1,2]),1);
assert.deepEqual(findSmallestNumber([1,3,4,5,0,3]),0);
assert.deepEqual(findSmallestNumber([-1,-2,2,1,3]),-2);

//test for function which returns average of numbers of an array

const calculateAverage = library.calculateAverage;
assert.deepEqual(calculateAverage([1]),1);
assert.deepEqual(calculateAverage([0,1]),0.5);
assert.deepEqual(calculateAverage([1,2,3]),2);
assert.deepEqual(calculateAverage([1,-1,2,2]),1);


//test for function which returns array of length of each element of given array

const mapLength = library.mapLength;
assert.deepEqual(mapLength(['a']),[1]);
assert.deepEqual(mapLength(['a','b']),[1,1]);
assert.deepEqual(mapLength(['abc','def','pq']),[3,3,2]);

//test for function which returns count of odd numbers in an array

const countOddNumbers = library.countOddNumbers;
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([1,2,3]),2);
assert.deepEqual(countOddNumbers([1,3,7,5]),4);
assert.deepEqual(countOddNumbers([2,4,6]),0);
assert.deepEqual(countOddNumbers([-1,-2,-3,-4]),2);

//test for function which returns count of even numbers in an array.

const countEvenNumbers = library.countEvenNumbers;
assert.deepEqual(countEvenNumbers([1]),0);
assert.deepEqual(countEvenNumbers([1,2,3]),1);
assert.deepEqual(countEvenNumbers([2,1,-4,-6,4]),4);


//test for function which returns the array of numbers above the threshold

const filterNumberAboveThreshold = library.filterNumberAboveThreshold;
assert.deepEqual(filterNumberAboveThreshold([1],0),[1]);
assert.deepEqual(filterNumberAboveThreshold([1],1),[]);
assert.deepEqual(filterNumberAboveThreshold([1,2,3,4],2),[3,4]);
assert.deepEqual(filterNumberAboveThreshold([1,2,-2,-4,1,-2,-8],-2),[1,2,1]);

//test for function which returns count of numbers above threshold

const countNumbersAboveThreshold = library.countNumbersAboveThreshold;
assert.deepEqual(countNumbersAboveThreshold([1],0),1);
assert.deepEqual(countNumbersAboveThreshold([1],1),0);
assert.deepEqual(countNumbersAboveThreshold([1,2,3,4,5,6],3),3);
assert.deepEqual(countNumbersAboveThreshold([1,-2,-3,4],-2),2);


//test for function which returns index of first position of given elements

const findIndex = library.findIndex;
assert.deepEqual(findIndex([1],1),0);
assert.deepEqual(findIndex([0,1],1),1);
assert.deepEqual(findIndex([1,2,3,2],2),1);
assert.deepEqual(findIndex([3,3,3,3,3],3),0);

//test for function which returns array of numbers below threshold

const filterNumberBelowThreshold = library.filterNumberBelowThreshold;
assert.deepEqual(filterNumberBelowThreshold([0],1),[0]);
assert.deepEqual(filterNumberBelowThreshold([1],1),[]);
assert.deepEqual(filterNumberBelowThreshold([1,2,3,4],4),[1,2,3]);

//test for function which returns count of numbers below the threshold

const countNumbersBelowThreshold = library.countNumbersBelowThreshold;
assert.deepEqual(countNumbersBelowThreshold([0],1),1);
assert.deepEqual(countNumbersBelowThreshold([1],1),0);
assert.deepEqual(countNumbersBelowThreshold([0,1],1),1);
assert.deepEqual(countNumbersBelowThreshold([0,1,2,3],2),2);


//test for function which returns boolean value for is given array in ascending order

const isInAscendingOrder = library.isInAscendingOrder;
assert.deepEqual(isInAscendingOrder([1]),true);
assert.deepEqual(isInAscendingOrder([1,2]),true);
assert.deepEqual(isInAscendingOrder([1,2,2]),true);
assert.deepEqual(isInAscendingOrder([2,1]),false);
assert.deepEqual(isInAscendingOrder([0,1,2,3,4]),true);
assert.deepEqual(isInAscendingOrder([-3,-1,0,1,3]),true);
assert.deepEqual(isInAscendingOrder([1,-2,2]),false);

//test for function which returns boolean value for is given array in descending order 

const isInDescendingOrder = library.isInDescendingOrder;
assert.deepEqual(isInDescendingOrder([1]),true);
assert.deepEqual(isInDescendingOrder([2,1]),true);
assert.deepEqual(isInDescendingOrder([1,2]),false);
assert.deepEqual(isInDescendingOrder([1,0,-1]),true);
assert.deepEqual(isInDescendingOrder([-3,2,1]),false);
assert.deepEqual(isInDescendingOrder([54,32,13,1]),true);

console.log("all tests are passed")









