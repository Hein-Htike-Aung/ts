class Person {
  constructor(private _id?: number, private _name?: string) {}

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  private privatePrint() {
    return `${this._id} - ${this._name}`;
  }

  print() {
    return this.privatePrint();
  }

  static printClassInfo() {
    console.log(Person);
  }
}

const person = new Person();
person.id = 3;
console.log(person.id);

/* Implement Interface */
interface PersonInterface {
  readonly _id: number;
  readonly _name: string;
  register: () => string;
  // register(): string;
}

class Student implements PersonInterface {
  constructor(readonly _id: number, readonly _name: string) {}

  register(): string {
    return `${this._name} is registered`;
  }
}

/* Extends Class */
class Employee extends Student {
  constructor(_id: number, _name: string, private _position: string) {
    super(_id, _name);
  }
}

let emp = new Employee(1, 'John', 'Junior');
console.log(emp.register());

/* Class as Type (Complying Cohesive principle) */
class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log(this._x, this._y);
  }

  getDistance(another: Point) {
    console.log(this._x, 'is far from ', another._x);
  }
}

let drawPoint = (point: Point) => {
  point.draw();
};
let getDistance = (point1: Point, porint2: Point) => {
  point1.getDistance(porint2);
};

const point = new Point(3, 4);
const point2 = new Point(10);
drawPoint(point);
getDistance(point, point2);
