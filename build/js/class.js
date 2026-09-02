class Aids_C {
    name;
    #cgpa;
    constructor(name, cgpa) {
        this.name = name;
        this.#cgpa = cgpa;
    }
    SetCgpa(cgpa) {
        this.#cgpa = cgpa;
    }
    ShowCgpa() {
        console.log(this.#cgpa);
    }
}
const st1 = new Aids_C("Rohith", 8);
st1.ShowCgpa();
console.log(st1.name);
export {};
// console.log(st1.#cgpa); 
