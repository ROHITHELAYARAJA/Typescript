type One = string;
type Two = string | number;
type Three = "hii";

// Convert to more or less specific 

const addOrConcat = (a:number , b:number , c:"add"|"concat"):number|string=>{
    if(c === "add"){
        return a+b;
    }
    return ""+a+b;
}

let myVal :string = addOrConcat(2,3,"concat") as string;

// Be careful while using type assertion because TS see no error but it actually return String

let myNum :number = addOrConcat(2,3,"concat") as number;

(10 as unknown) as string; // double assertion

// DOM

const myInput = document.getElementById("myInput") as HTMLInputElement;

const img = document.querySelector("img")!;

img.src;
myInput.value;