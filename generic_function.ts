function shrinkArray<T>(data: Array<T>, amountToShrink: number): Array<T> {
  return data.splice(2, amountToShrink);
}

let stringArray: string[] = ["apple", "orange", "pear"];

let fewerStrings = shrinkArray<string>(stringArray, 2);

console.log(fewerStrings);

let numArray: number[] = [1, 2, 3];

let fewerNums = shrinkArray<number>(numArray, 2);

console.log(fewerNums);
