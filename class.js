class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }
}

let kim = new Person("kim", 10, 20);
let lee = new Person("lee", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
