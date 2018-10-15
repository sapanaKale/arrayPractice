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
 // reversedArray.pop();
  return reversedArray;
}

exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.insertArrayElement = insertArrayElement;
exports.removeFirstOccurence = removeFirstOccurence;
exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;


