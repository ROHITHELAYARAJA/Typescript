let mark = [];
// literal's type 
let game;
game = "basketball";
console.log(game);
// Functions Part
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
let sub = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(add(2, 3));
logMsg(multiply(7, 9));
;
const addAll = (a, b, c) => {
    return a + b + c;
};
// Optional parameter 
const addAllOptional = (a, b, c) => {
    if (typeof b !== "undefined" && typeof c !== "undefined") {
        return a + b + c;
    }
    if (typeof b !== "undefined") {
        return a + b;
    }
    return a;
};
// Default parameter
const addAllDefault = (a, b, c = 10) => {
    return a + b + c;
};
// Optional parameter Calling with undefined
logMsg(addAllOptional(0, 3, 4));
// Rest parameter
//  ... is where is used to collect all the values passed to this function.
// It is called a rest operator/rest parameter.
const total = (...nums) => {
    return nums.reduce((accumutator, curr) => accumutator + curr, 0);
};
export {};
