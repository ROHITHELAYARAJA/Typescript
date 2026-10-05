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

class Aids_C{
  public name: string;
  private cgpa: number;

  constructor(name: string, cgpa: number){
    this.name = name;
    this.cgpa = cgpa;
  }
  
  SetCgpa(cgpa: number){
    this.cgpa = cgpa;
  }

  ShowCgpa(){
    console.log(this.cgpa);
  }
}

const st1 = new Aids_C("Rohith",8);
st1.ShowCgpa();

console.log(st1.name);

// console.log(st1.cgpa); 


class Coder {
    constructor(
        public name: string,
        public music: string,
        public age: number
    ) {}
}

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
    }
}

const webDev = new WebDev("HP", "Rohith3130", "Jazz", 19);

console.log(webDev.name);

const coder = new Coder();

console.log(coder.name);

