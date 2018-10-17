const insertArrayElement = function (source,index,valueToInsert) {
  let result = source.slice(0,index);
  for (let position=source.length-1; position>=index; position--) {
    result[position+1] = source[position];
  }
  result[index] = valueToInsert;
  return result;
}

const removeFirstOccurence = function (source,value) {
  let index = source.indexOf(value);
  let result = source.slice(0,index);
  for (let pos=index; pos<source.length; pos++) {
    result[pos] = source[pos+1];
  }
  result.pop();
  return result;
}

const isNumberEven = function (number) {
  return (number % 2 == 0)
}

const filterEvenNumbers = function (source) {
  let result = [];
  for (let number of source) {
    if (isNumberEven(number)) {
      result.push(number);
    }
  }
  return result;
}

const isNumberOdd = function (number) {
  return number % 2 == 1 || number % 2 == -1;
}

const filterOddNumbers = function (source) { 
  let result = [];
  for (let number of source) { 
    if (isNumberOdd(number)) {
      result.push(number);
    }
  }
  return result;
}


const calculateSum = function (elements) {
  let result = 0;
  for (element of elements) {
    result = result + element;
  }
  return result;
}

const reverseArray = function (elements) {
  let reversedArray = [];
  for (element of elements) {
    reversedArray.unshift(element);
  }
  return reversedArray;
}

const selectEverySecondElement = function (elements) {
  let result = [];
  for (let index=1; index<elements.length; index+=2) {
    result.push(elements[index]);
  }
  return result;
}

const generateReverseFibonacci = function (length) {
  let result = [];
 if (length >= 1) { 
   result.push(0);
 }
 if (length > 1) { 
   result.push(1);
 }
  for (let index=2; index<length; index++) {
    result.push(result[index-1] + result[index-2]);
  }
  result = reverseArray(result);
  return result;
}

const findGratestNumber = function (source) {
  let greatestNumber = source[0];
  for (number of source) {
    greatestNumber = Math.max(greatestNumber,number);
  }
  return greatestNumber;
}

const findSmallestNumber = function (source) {
  let smallestNumber = source[0];
  for (let number of source) {
    smallestNumber = Math.min(smallestNumber,number);
  }
  return smallestNumber;
}

const calculateAverage = function (source) {
  let average = calculateSum(source)/source.length;
  return average;
}

const mapLength = function (source) {
  let result = [];
  for (let index=0; index<source.length; index++) {
    result[index] = source[index].length;
  }
  return result;
}

const countOddNumbers = function (source) {
  let count = 0;
  count = filterOddNumbers(source).length;
  return count;
}

const countEvenNumbers = function (source) {
  let count = 0;
  count = filterEvenNumbers(source).length;
  return count;
}

exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mapLength = mapLength;
exports.calculateAverage = calculateAverage;
exports.findSmallestNumber = findSmallestNumber;
exports.findGratestNumber = findGratestNumber;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.selectEverySecondElement = selectEverySecondElement;
exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.insertArrayElement = insertArrayElement;
exports.removeFirstOccurence = removeFirstOccurence;
exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;


