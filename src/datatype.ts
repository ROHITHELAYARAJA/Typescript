// ==========================================
// TYPESCRIPT DATA TYPES - SIMPLE EXAMPLES
// ==========================================


// 1. STRING
// Used for text
let name: string = "Rohith";


// 2. NUMBER
// Used for numbers
let age: number = 19;
let price: number = 99.99;


// 3. BOOLEAN
// Used for true / false
let isStudent: boolean = true;


// 4. ARRAY
// Multiple values of the same type
let marks: number[] = [80, 90, 95];
let names: string[] = ["Rohith", "John", "David"];


// 5. OBJECT
// Stores properties and their types
let student: {
    name: string;
    age: number;
} = {
    name: "Rohith",
    age: 19
};


// 6. TUPLE
// Fixed order and types
let user: [string, number] = ["Rohith", 2];


// 7. ANY
// Can contain any type
// Avoid using it unless necessary
let data: any = 10;
data = "Rohith";
data = true;


// 8. UNKNOWN
// Type is unknown until we check it
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}


// 9. UNION
// | means OR
let id: string | number;

id = 101;       // number ✅
id = "ABC101";  // string ✅

// 10. INTERSECTION
// & means AND
type Person = {
    name: string;
};

type Employee = {
    salary: number;
};

type PersonEmployee = Person & Employee;

let employee: PersonEmployee = {
    name: "Rohith",
    salary: 50000
};


// 11. TYPE
// Create your own type / blueprint
type Student = {
    name: string;
    age: number;
};

let student1: Student = {
    name: "Rohith",
    age: 19
};


// 12. INTERFACE
// Describes the structure of an object
interface User {
    name: string;
    age: number;
}

let user1: User = {
    name: "Rohith",
    age: 19
};


// 13. FUNCTION
// Define parameter types and return type
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// 14. VOID
// Function does not return a value
function sayHello(): void {
    console.log("Hello Rohith!");
}

sayHello();


// 15. NULL
// Represents no value
let selectedUser: string | null = null;

selectedUser = "Rohith";
selectedUser = null;


// 16. UNDEFINED
// Represents an undefined value
let username: string | undefined;

username = "Rohith";
username = undefined;


// 17. NEVER
// Function never successfully returns
function throwError(): never {
    throw new Error("Something went wrong");
}


// 18. ENUM
// Group of named values
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Up;


// 19. LITERAL TYPE
// Only specific values are allowed
let role: "admin" | "user" | "guest";

role = "admin"; // ✅
role = "user";  // ✅


// 20. READONLY
// Property cannot be changed after assignment
type Product = {
    readonly id: number;
    name: string;
};

let product: Product = {
    id: 101,
    name: "Laptop"
};

product.name = "Computer"; // ✅
// product.id = 102;       // ❌ Cannot change readonly property

const sample = (a:number,b:number)=>{
    return a+b;
}
let answer = sample(1,3);

console.log(answer);
