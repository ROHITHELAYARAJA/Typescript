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
// DOM (works in a browser, not in Node)
const myInput = typeof document !== "undefined"
    ? document.getElementById("myInput")
    : null;
const img = typeof document !== "undefined"
    ? document.querySelector("img")
    : null;
if (myInput) {
    console.log(myInput.value);
}
if (img) {
    console.log(img.src);
}
export {};
