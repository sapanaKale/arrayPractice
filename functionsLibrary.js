const insertArrayElement = function (source,index,valueToInsert) {
  let result = source.slice(0,index);
  result[index] = valueToInsert;
  for (let position=index; position<source.length; position++) {
    result.push(source[position]);
  }
  return result;
}

const removeFirstOccurence = function (source,value) {
  let index = source.indexOf(value);
  let result = source.slice(0,index);
  for (let pos=index; pos<source.length; pos++) {
    result.push(source[pos+1]);
  }
  result.pop();
  return result;
}

const isNumberEven = function (number) {
  return (number % 2 == 0)
}

const filterEvenNumbers = function (source) {
  return source.filter(isNumberEven);
}

const isNumberOdd = function (number) {
  return number % 2 == 1 || number % 2 == -1;
}

const filterOddNumbers = function (source) { 
  return source.filter(isNumberOdd);
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

const filterNumberAboveThreshold = function (source,threshold) {
  let result = [];
  for (number of source) {
    if (number > threshold) {
      result.push(number)
    }
  }
  return result;
}

const countNumbersAboveThreshold = function (source,threshold) {
  let count = 0;
  count = filterNumberAboveThreshold(source,threshold).length;
  return count;
}
  
const findIndex = function (source,number) {
  let index = -1;
  for (let position=source.length-1; position>=0; position--) {
    if (source[position] == number) {
      index = position;
    }
  }
  return index;
}


const filterNumberBelowThreshold = function (source,threshold) {
  let result = [];
  for (number of source) {
    if (number < threshold) {
      result.push(number)
    }
  }
  return result;
}

const countNumbersBelowThreshold = function (source,threshold) {
  let count = 0;
  count = filterNumberBelowThreshold(source,threshold).length;
  return count;
}

const isInAscendingOrder = function (source) {
  let result = true;
  for (let index=0; index<source.length-1; index++) {
    if (source[index] >source[index+1]) {
      result = false;
    }
  }
  return result;
}


const isInDescendingOrder = function (source) {
  let result = true;
  for (let index=0; index<source.length-1; index++) {
  if (source[index] < source[index+1]) {
      result = false;
    }
  }
  return result;
}

const extractDigits = function (number) {
  let result = [];
  let givenNumber = number.toString();
  for (let digit of givenNumber) {
    result.push(digit);
  }
  return result;
}

const extractUnique = function (source) {
  let result = [];
  for (let element of source) {
    let shouldAdd = (!result.includes(element));
      if (shouldAdd) {
        result.push(element);
      }
  }
  return result;
}

const extractUnionSet = function (source1,source2) {
  let result = [];
  result  = extractUnique(source1);
  for (let element of source2) {
    let shouldAdd = (!result.includes(element));
    if (shouldAdd) {
      result.push(element);
    }
  }
  return result;
}

const extractCommon = function (source1,source2) {
  let result = [];
  for (let element of source1) {
    if (source2.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

const extractDifference = function (source1,source2) {
  let result = [];
  for (let element of source1) {
    let shouldAdd = (!source2.includes(element));
    if (shouldAdd) {
      result.push(element)
    }
  }
  return result;
}
  
const isSubset = function (set1,set2) {
  let result = true;
  for ( let element of set2 ) {
    let isNotInclude = (!set1.includes(element));
    if (isNotInclude) {
      result = false;
    }
  }
  return result;
}

const zipArray = function (source1,source2) {
  let result = [];
  let smallerLength = Math.min(source1.length,source2.length);
  for (let index=0; index<smallerLength; index++) {
    result.push([source1[index],source2[index]]);
  }
  return result;
}

const rotateElements = function (source,index) {
  let result = source;
  for (let position=0; position<index; position++) {
    result.push(result.shift());
  }
  return result;
}

const subdivideArray = function (source,threshold) {
  let firstElement = filterNumberAboveThreshold(source,threshold);
  let secondElement = filterNumberBelowThreshold(source,threshold);
  let result = [firstElement,secondElement];
  return result;
}

exports.subdivideArray = subdivideArray;
exports.rotateElements = rotateElements;
exports.zipArray = zipArray;
exports.isSubset = isSubset;
exports.extractDifference = extractDifference;
exports.extractCommon = extractCommon;
exports.extractUnionSet = extractUnionSet;
exports.extractUnique = extractUnique;
exports.extractDigits = extractDigits;
exports.isInDescendingOrder = isInDescendingOrder;
exports.isInAscendingOrder = isInAscendingOrder;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.filterNumberBelowThreshold = filterNumberBelowThreshold;
exports.findIndex = findIndex;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.filterNumberAboveThreshold = filterNumberAboveThreshold;
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


