type StringorNumber = string|number;
type StringorNumberArr = (string|number)[];

type Student = {
    name:string;
    id:StringorNumber;   
}
type mark = StringorNumberArr;
let mark : StringorNumberArr = []

// literal's type 

let game:"cricket"|"football"|"basketball";
game = "basketball";
console.log(game);

// Functions Part

const add = (a:number,b:number) : number=>{
    return a+b;
}

const logMsg = (message:any)=>{
    console.log(message);
}

let sub = function(c:number,d:number):number{
    return c-d;
}

type MathFn = (a:number,b:number) => number;

let multiply :MathFn = function (c,d){
    return c*d;
}

logMsg(add(2,3));
logMsg(multiply(7,9));

// Interface also work 

interface MathOperation { 
    (a:number,b:number) : number
};

const addAll = (a:number,b:number,c:number):number=>{
    return a+b+c;
}

// Optional parameter 

const addAllOptional = (a:number,b?:number,c?:number):number=>{
    if(typeof b !== "undefined" && typeof c !== "undefined"){
        return a+b+c;
    }
    if(typeof b !== "undefined"){
        return a+b;
    }
    return a;
}

// Default parameter

const addAllDefault = (a:number,b:number,c:number=10):number=>{
    return a+b+c;
}

// Optional parameter Calling with undefined

logMsg(addAllOptional(0,3,4));

// Rest parameter

//  ... is where is used to collect all the values passed to this function.

// It is called a rest operator/rest parameter.

const total = (...nums:number[]):number=>{
    return nums.reduce((accumutator,curr)=> accumutator+curr,0);
}