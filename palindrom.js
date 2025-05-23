/*
    Написать функцию, которая принимает на вход строку и проверяет, является ли она палиндромом.
    Палиндром — строка, которая читается одинаково слева-направо и справа-налево.
    На вход всегда попадает строка, содержащая n > 0 символов.
*/

function isPalindrome(str) {
  for (i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;
  }

  return true;
}

console.log(isPalindrome('Anna')); // true
console.log(isPalindrome ('Anya')); // false
console.log(isPalindrome ('Anyna')); // true
