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
  let evenNumbers = source.filter(isNumberEven);
  return evenNumbers;
}

const isNumberOdd = function (number) {
  return number % 2 == 1 || number % 2 == -1;
}

const filterOddNumbers = function (source) { 
  let oddNumbers = source.filter(isNumberOdd);
  return oddNumbers;
}


const add = function (number1, number2) {
  return number1 + number2;
}

const calculateSum = function (elements) {
  let sum = elements.reduce(add,0);
  return sum;
}

const reverseArray = function (elements) {
  return elements.reduce(function (array,element) {
    array.unshift(element);
    return array;
  },[])
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

const findGreater = function (number1,number2) {
  if ( number1 > number2 ) {
    return number1;
  }
  return number2;
}

const findSmaller = function (number1,number2) {
  if ( number1 < number2 ) {
    return number1;
  }
  return number2;
}

const findGratestNumber = function (source) {
  return source.reduce(findGreater);
}

const findSmallestNumber = function (source) {
  return source.reduce(findSmaller);
}

const calculateAverage = function (source) {
  let average = calculateSum(source)/source.length;
  return average;
}

const calculateLength = function (element) {
  return element.length;
}

const mapLength = function (source) {
  return source.map(calculateLength);
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

const isGreater = function (threshold) {
  return function (element) {
    return element > threshold;
  }
}

const filterNumberAboveThreshold = function (source,threshold) {
  let numbersGreaterThan = isGreater(threshold);
  return source.filter(numbersGreaterThan);
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
  return set2.every(function (element) {
    return set1.includes(element);
  })
}

const zip = function (object, element) {
  object.value[object.index] = [element,object.array[object.index]];
  object.index++;
  return object;
}

const compareArrayLength = function (source1, source2) {
  let result = { smaller:source1, greater:source2};
  if (source2.length < source1.length) {
    result.smaller = source2;
    result.greater = source1;
  }
  return result;
}

const zipArray = function (source1,source2) {
  let smallerArray = compareArrayLength(source1,source2).smaller;
  let greaterArray = compareArrayLength(source1,source2).greater;
  return smallerArray.reduce(zip,{index:0,value:[],array:greaterArray}).value;
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


