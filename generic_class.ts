class Stack<T> {
  items: Array<T> = [];

  push(newItem: T): void {
    this.items.push(newItem);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

class DataCollection<T> {
  items: T[] = [];

  addItemToCollection(newItem: T): void {
    this.items.push(newItem);
  }

  clearCollection(): void {
    this.items = [];
  }
}

let stringData = new DataCollection<string>();
stringData.addItemToCollection("apple");
stringData.addItemToCollection("orange");
stringData.addItemToCollection("pear");

console.log(stringData);
