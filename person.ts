interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  title?: string; // optional
  doWork(): void;
}

let engineer: Employee = {
  name: "Daniel",
  age: 48,
  doWork: () => console.log("Busy working..."),
};

engineer.doWork();
console.log(engineer);
