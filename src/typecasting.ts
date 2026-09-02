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

// DOM (works in a browser, not in Node)

const myInput = typeof document !== "undefined"
    ? document.getElementById("myInput") as HTMLInputElement | null
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