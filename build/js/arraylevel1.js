// push,pop,shift,unshift
/*
                 ARRAY
        ┌─────────────────────┐
START → │ A │ B │ C │ D │ ← END
        └─────────────────────┘
          ↑               ↑
        shift            pop
        unshift          push
*/
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [10, 20, 30];
console.log(fruits[0]);
console.log(numbers[1]);
fruits.push("Pineapple");
console.log(fruits);
fruits.pop();
console.log(fruits);
numbers.unshift(111);
console.log(numbers);
numbers.shift();
console.log(numbers);
export {};
