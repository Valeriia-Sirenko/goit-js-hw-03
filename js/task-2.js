function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви
  const combinedArray = firstArray.concat(secondArray);

  // Якщо довжина масиву більше maxLength, повертаємо обрізаний масив
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  // Якщо довжина не перевищує maxLength, повертаємо весь масив
  return combinedArray;
}

// Перевірка функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
