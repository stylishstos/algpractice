/*
    На вход подается массив произвольный массив чисел, напишите функцию,
    которая отсортирует нечетные числа, а четные оставит на своих местах
*/

function sortEven(arr) {
  const evens = arr.filter((val) => val % 2).sort();

  let i = 0;

  return arr.map((val) => val % 2? evens[i++] : val);
}

console.log(sortEven([2, 9, 5, 7, 4, 3, 8, 1, 2, 4])); // [2, 1, 3, 5, 4, 7, 8, 9, 2, 4]
