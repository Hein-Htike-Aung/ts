/* Function with Generic Type */
const getArray = <T extends number | string>(items: T[]): T[] => {
  return new Array().concat(items);
};

getArray<number>([1, 2, 3]);
getArray<string>(['1', '2', '3']);

// Make Tuple Array
const makeTupleArr = <T, V = number>(item1: T, item2: V): [T, V][] => {
  return [[item1, item2]];
};

let tupleArr = makeTupleArr<string, number>('item1', 2);
tupleArr.push(['item2', 3]);

let tupleArr2 = makeTupleArr<string>('item4', 10);

console.log(tupleArr);
console.log(tupleArr2);

/* Generic Class */
class Observable<T> {
  constructor(private _value: T) {}

  print() {
    console.log(this._value);
  }
}

let num: Observable<number> = new Observable(3);
num = new Observable(3);
num.print();

let obj = new Observable({ name: 'xioatinig', age: 19 });
obj.print();

/* Generic extends */
// at least T has to have firstName and lastName
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

const fullName = makeFullName({ firstName: 'John', lastName: 'Doe', age: 19 });
console.log(fullName);

const fullName2 = makeFullName({ firstName: 'Li', lastName: 'ly' });
console.log(fullName2);

/* Generic with Interface */
interface Tab<T> {
  id: number;
  position: number;
  data: T;
}

const numberTab: Tab<number> = {
  id: 1,
  position: 3,
  data: 3,
};

const stringTab: Tab<string> = {
  id: 2,
  position: 4,
  data: 'data',
};
