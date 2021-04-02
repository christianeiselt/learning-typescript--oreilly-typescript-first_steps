interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  title?: string; // optional
  doWork(): void;
}

class Manager implements Employee {
  title?: string | undefined;
  doWork(): void {
    console.log("Manager at work.");
  }
  name: string;
  age: number;

  constructor(public department: string, emp_name: string, emp_age: number) {
    this.name = emp_name;
    this.age = emp_age;
  }
}

let mgr: Manager = new Manager("WebDev", "Michelle", 30);
mgr.doWork();
console.log(mgr);

mgr = {
  department: "Web Dev",
  name: "Daniel",
  age: 48,
  doWork: () => console.log("Busy working..."),
};

let engineer: Employee = {
  name: "Daniel",
  age: 48,
  doWork: () => console.log("Busy working..."),
};

engineer.doWork();
console.log(engineer);
