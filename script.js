// JS: More Functions, Arrays, and Objects
// =======================================
// Exercise 1: Fizzbuzz
// ====================
// Write a function that loops through numbers from 1 to 100 and does the following:
//   If the number is divisible by 3, print Fizz.
//   If the number is divisible by 5, print Buzz.
//   If the number is divisible by both 3 and 5, print FizzBuzz.
//   If the number is divisible by neither 3 nor 5, print the number.
// Hint: The % operator gives the remainder when one number is divided by another, e.g. 10 % 7 gives 3.
// Note: This used to be a common interview question.

var fizzBuzz = function (num) {
  var message = [];

  if (num % 3 === 0) {
    message.push('Fizz');
  }

  if (num % 5 === 0) {
    message.push('Buzz');
  }

  message = message.join('') || num;
  console.log(message);
};

// Exercise 2: Prime Counting
// ==========================
// Write a function that takes a number and returns true if the number is prime, and false otherwise.
// Hint: A number is prime when it is only divisble by 1 and itself.

var isPrime = function (num) {
  var i;

  if (num === 1) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Exercise 3: Letter Counting
// ===========================
// Write a function that takes a string and prints out how many times a character occurs in the string. For example, letterCount("apple") should print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.

var letterCount = function (str) {
  var strObject = {};
  var i;
  var char;

  for (i = 0; i < str.length; i++) {
    char = str.charAt(i);

    if (!strObject[char]) {
      strObject[char] = 0;
    }

    strObject[char] += 1;
  }

  for (char in strObject) {
    console.log(char, '-', strObject[char]);
  }
};

// Exercise 4: Debugging
// =====================
// The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write any necessary corrected code below.
// Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.

var x = 2, y = 10;

function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
  console.log("Variables swapped:", a, b);
}

swap(x, y);
console.log("The value of x is", x, "and the value of y is", y);

// Explanation:
/**
 * swap(x, y) will copy the value of x and y and assign them to a and b.
 * a and b are only accessible inside function swap(), and they doesn't effect
 * the origianl x and y value.
 */
// Write your corrected code below.
var swapXY = function (a, b) {
  // This only works if x and y exist in global scope.
  // x = b;
  // y = a;

  return [b, a];
};

var swapped = swapXY(x, y);
x = swapped[0];
y = swapped[1];
console.log("The value of x is", x, "and the value of y is", y);

// Exercise 5: Array arithmetic
// ============================
// 5A. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays. For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].
// Hint: The .indexOf method of an array can find you the index of a given element in an array.
// *Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.

var uniqueArray = function (arr1, arr2, isSorted) {
  var unique = [];
  var joined = arr1.concat(arr2);

  joined.forEach(function (num) {
    if (unique.indexOf(num) === -1) {
      unique.push(num);
    }
  });

  return isSorted ? unique.sort() : unique;
};

// 5B. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

var intersection = function (arr1, arr2) {
  var arr2Copy = arr2.slice();

  return arr1.filter(function (value) {
    var index = arr2Copy.indexOf(value);
    if (index !== -1) {
      arr2Copy.splice(index, 1);
      return true;
    }
    return false;
  });
};

// 5C. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].

var difference = function (arr1, arr2) {
  var arr2Copy = arr2.slice();
  var result = [];
  var index;

  arr1.forEach(function (num) {
    index = arr2Copy.indexOf(num);
    if (index === -1) {
      result.push(num);
    } else {
      arr2Copy.splice(index, 1);
    }
  });

  return result.concat(arr2Copy);
};

// Bonus round!
// ============
// Extension to Exercise 2: Uncomment the code below. It generates an array of 10000 random integers. Write a function that takes the array of integers and returns an array of objects. Each object should have the following 3 keys and their corresponding values:
// 1. key: `number`, value: the integer itself
// 2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
// 3. key: `isPrime`, value: true if the number is prime, false if it isn't

var i = 1, testArray = [];
while (i <= 10000) {
  testArray[i - 1] = Math.ceil(Math.random() * 10000);
  i++;
};

var convertToObject = function (arrOfInt) {
  var result = [];
  var object;

  arrOfInt.forEach(function (value) {
    object = {};
    object.number = value;

    if (value % 10 === 1 && value !== 11) {
      object.ordinalForm = value + 'st';
    } else if (value % 10 === 2 && value !== 12) {
      object.ordinalForm = value + 'nd';
    } else if (value % 10 === 3 && value !== 13) {
      object.ordinalForm = value + 'rd';
    } else {
      object.ordinalForm = value + 'th';
    }

    object.isPrime = isPrime(value);
    result.push(object);
  });

  return result;
};


// Extension to Exercise 3: Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other. E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.
var isAnagram = function (str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};
