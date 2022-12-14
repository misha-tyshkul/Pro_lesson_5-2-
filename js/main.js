const num = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

console.group("Знайти суму та кількість позитивних елементів.");
let counterOfElements = 0;
let amountOfElements = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    counterOfElements += num[i];
  }
  if (num[i] > 0) {
    amountOfElements.push(num[i]);
  }
}

console.log(counterOfElements);
console.log(amountOfElements.length);

console.groupEnd();

console.group("Знайти мінімальний елемент масиву та його порядковий номер.");

let num_min = num[0];
for (i = 1; i < num.length; i++) {
  if (num[i] <= num_min) {
    num_min = num[i];
  }
}
console.log(num_min);
console.log(num.indexOf(num_min));

console.groupEnd();

console.group("Знайти максимальний елемент масиву та його порядковий номер.");
let num_max = num[0];

for (i = 1; i < num.length; i++) {
  if (num[i] >= num_max) {
    num_max = num[i];
  }
}

console.log(num_max);
console.log(num.indexOf(num_max));

console.groupEnd();

console.group("Визначити кількість негативних елементів.");

let numberOfElements = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    numberOfElements.push(num[i]);
  }
}
console.log(numberOfElements.length);

console.groupEnd();

console.group("Знайти добуток позитивних елементів.");

let result = 1;

for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    result *= num[i];
  }
}
console.log(result);

console.groupEnd();
