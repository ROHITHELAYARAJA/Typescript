// ==========================================
// TYPESCRIPT DATA TYPES - SIMPLE EXAMPLES
// ==========================================
// 1. STRING
// Used for text
let name = "Rohith";
// 2. NUMBER
// Used for numbers
let age = 19;
let price = 99.99;
// 3. BOOLEAN
// Used for true / false
let isStudent = true;
// 4. ARRAY
// Multiple values of the same type
let marks = [80, 90, 95];
let names = ["Rohith", "John", "David"];
// 5. OBJECT
// Stores properties and their types
let student = {
    name: "Rohith",
    age: 19
};
// 6. TUPLE
// Fixed order and types
let user = ["Rohith", 2];
// 7. ANY
// Can contain any type
// Avoid using it unless necessary
let data = 10;
data = "Rohith";
data = true;
// 8. UNKNOWN
// Type is unknown until we check it
let value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// 9. UNION
// | means OR
let id;
id = 101; // number ✅
id = "ABC101"; // string ✅
let employee = {
    name: "Rohith",
    salary: 50000
};
let student1 = {
    name: "Rohith",
    age: 19
};
let user1 = {
    name: "Rohith",
    age: 19
};
// 13. FUNCTION
// Define parameter types and return type
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// 14. VOID
// Function does not return a value
function sayHello() {
    console.log("Hello Rohith!");
}
sayHello();
// 15. NULL
// Represents no value
let selectedUser = null;
selectedUser = "Rohith";
selectedUser = null;
// 16. UNDEFINED
// Represents an undefined value
let username;
username = "Rohith";
username = undefined;
// 17. NEVER
// Function never successfully returns
function throwError() {
    throw new Error("Something went wrong");
}
// 18. ENUM
// Group of named values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let direction = Direction.Up;
// 19. LITERAL TYPE
// Only specific values are allowed
let role;
role = "admin"; // ✅
role = "user"; // ✅
let product = {
    id: 101,
    name: "Laptop"
};
product.name = "Computer"; // ✅
// product.id = 102;       // ❌ Cannot change readonly property
const sample = (a, b) => {
    return a + b;
};
let answer = sample(1, 3);
console.log(answer);
export {};
//# sourceMappingURL=datatype.js.map