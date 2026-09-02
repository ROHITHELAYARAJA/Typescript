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
