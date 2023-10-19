// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

console.log(array);

const arrayForEach = array.forEach((value, index, array) => {
  // array[index] = "A";
  return { value, index, array };
});

console.log(arrayForEach);

// Immutable
/*⭐*/ const arrayMap = array.map((value, index, array) => {
  return { value, index, array };
});

console.log(array);
console.log(arrayMap);

const arrayDollar = [1, 2, 3000, 40, 50];

const realConverted = arrayDollar.map((dollar) => dollar * 5.05);

console.log(arrayDollar);
console.log(realConverted);

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 3 },
  { width: 2, height: 8 },
];

const calculatedAreas = rectangles.map((rectangle) => {
  return { area: rectangle.width * rectangle.height };
});

console.log(calculatedAreas);