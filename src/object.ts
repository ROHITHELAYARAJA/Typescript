let myObj : {
    name:string,
    age:number,
    isStudent : boolean
} = {
    name : "rohith",
    age : 19,
    isStudent : true
}
myObj.name = "jii"
console.log(myObj);

const obj = {
    prop1:"hii",
    prop2:1
}

obj.prop1 = "rohith"

console.log(obj);

type Student = {
    name:string,
    age:number,
    isStudent : boolean
}

const myObj2 : Student = {
    name : "rohith",
    age : 19,
    isStudent : true
}

console.log(myObj2);