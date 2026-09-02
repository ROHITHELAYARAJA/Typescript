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

console.log(st1.cgpa); 
