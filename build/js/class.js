/*
class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string
    ) {
        // The body can be left completely empty!
        // TypeScript automatically handles this.name = name, this.music = music, etc.
    }
}

*/
class Aids_C {
    name;
    cgpa;
    constructor(name, cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }
    SetCgpa(cgpa) {
        this.cgpa = cgpa;
    }
    ShowCgpa() {
        console.log(this.cgpa);
    }
}
const st1 = new Aids_C("Rohith", 8);
st1.ShowCgpa();
console.log(st1.name);
// console.log(st1.cgpa); 
class Coder {
    name;
    music;
    age;
    constructor(name, music, age) {
        this.name = name;
        this.music = music;
        this.age = age;
    }
}
class WebDev extends Coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
}
const webDev = new WebDev("HP", "Rohith", "Jazz", 19);
console.log(webDev.name);
const coder = new Coder("Rohith", "Jazz", 19);
export {};
