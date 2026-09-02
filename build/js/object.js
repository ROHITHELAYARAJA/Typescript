let myObj = {
    name: "rohith",
    age: 19,
    isStudent: true
};
myObj.name = "jii";
console.log(myObj);
const obj = {
    prop1: "hii",
    prop2: 1
};
obj.prop1 = "rohith";
console.log(obj);
const myObj2 = {
    name: "rohith",
    age: 19,
    isStudent: true
};
const myObj3 = {
    name: "aizen",
    age: 1,
    isStudent: true
};
myObj = myObj3;
const example = (myobj4) => {
    return `Hello ${myobj4.name}`;
};
console.log(example(myObj3));
export {};
