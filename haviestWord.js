/*
    Написать функцию, которая вернет "самое тяжелое слово" из переданных аргументов.
    каждая бувка имеет вес, а - самая легкая, z - тяжелая
    вес слова - сумма весов ее букв

    Ограничение
      - все буквы латиница в lowercase
      - не использовать словари, масссивы символов итд
*/

function haviestWord(word1, word2) {
  return word1 > word2 ? word1 : word2;
}

console.log(haviestWord('dog', 'zoo')); // 'zoo'
console.log(haviestWord('bread', 'butter')); // 'butter'
