/*
    Написать функцию, которая принимает на вход число и возвращает строку с красивым счетчиком.
*/
function formatCounter(num) {
  if (num > 1_000_000_000) {
    return `${parseInt(num / 1_000_000_000)}B`;
  }
  
  if (num > 1_000_000) {
    return `${parseInt(num / 1_000_000)}M`;
  }

  if (num > 1_000) {
    return `${parseInt(num / 1_000)}K`;
  }

  return num;
}

console.log(formatCounter(123)); // '123'
console.log(formatCounter(1234)); // '1K'
console.log(formatCounter(3600000)); // '3M'
console.log(formatCounter(3600000111)); // '3B'
