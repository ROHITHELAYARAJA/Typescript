// Convert to more or less specific 
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
// Be careful while using type assertion because TS see no error but it actually return String
let myNum = addOrConcat(2, 3, "concat");
10; // double assertion
// DOM
const myInput = document.getElementById("myInput");
const img = document.querySelector("img");
img.src;
myInput.value;
export {};
