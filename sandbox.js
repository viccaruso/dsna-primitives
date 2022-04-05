// Write a function that takes a sentence string and returns a new string that is the same sentence, 
// but with each word reversed (backwards). The order of words does not change.

const sentence = "This is a test"

function reverseWords(sentence) {
  return sentence.split('')
    .reverse()
    .join('');
};

console.log(reverseWords(sentence));

// Write a function at that takes an array and an index and returns the 
// item at corresponding index. However, negative indices should work from the back of the array.

function at(arr, index) {
  return (index >= 0) ? arr[index] : arr[arr.length + index]
};

console.log(at([1, 2, 3, 4, 5, 6], 1));
console.log(at([1, 2, 3, 4, 5, 6], -3));

// Write a function that takes a positive integer n, and returns an array that contains, in order, 
// all of the numbers from 1 to n. But for multiples of three (evenly divisible by three) print “Fizz” 
// instead of the number and for the multiples of five use “Buzz”. For numbers which are 
// multiples of both three and five use “FizzBuzz”.

function fizzBuzz(number) {
  const array = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if ( i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
};

console.log(fizzBuzz(100));

// Write a function that takes an array of strings. 
// All strings contains similar letters except one. Try to find it!

function uniqueString(strings) {
  const set = new Set(strings.map(word => word.toLowerCase()).sort());
    // ????
  return set;
};

console.log(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
console.log(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));
