class Aids_C{
  public name: string;
  #cgpa: number;

  constructor(name: string, cgpa: number){
    this.name = name;
    this.#cgpa = cgpa;
  }
  
  SetCgpa(cgpa: number){
    this.#cgpa = cgpa;
  }

  ShowCgpa(){
    console.log(this.#cgpa);
  }
}

const st1 = new Aids_C("Rohith",8);
st1.ShowCgpa();

console.log(st1.name);

// console.log(st1.#cgpa); 
