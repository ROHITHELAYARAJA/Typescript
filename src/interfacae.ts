interface Student{
    name:string,
    age:number,
    isStudent:boolean
}

const myObj = {
    name:"rohith",
    age:19,
    isStudent:true
}

const myObj2 : Student = myObj;

console.log(myObj2);

export{};