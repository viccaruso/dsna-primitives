// Write a function that takes a sentence string and returns a new string that is the same sentence, 
// but with each word reversed (backwards). The order of words does not change.

const sentence = "This is a test"

function reverseWords(sentence) {
  return sentence.split('')
    .reverse()
    .join('');
};

console.log(reverseWords(sentence));