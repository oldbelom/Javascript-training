// Figure out whether the number palindrome or not

// 1001 - yes, is palindrome
// 1234 - no, it's not palindrome

function isPalindrome(numberAsString) {
  let numbers = numberAsString.split("");
  let isPalindrome = true;

  for (let i = 0; i < numbers.length / 2; i++) {
    if (numbers[i] !== numbers[numbers.length - 1 - i]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

console.log(isPalindrome("10001"));
console.log(isPalindrome("12345"));
console.log(isPalindrome("123321"));
