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

  constructor(
    public department: string,
    employeeName: string,
    employeeAge: number
  ) {
    this.name = employeeName;
    this.age = employeeAge;
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
