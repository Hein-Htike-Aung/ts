/* Declare array */
let declareArray: string[];
let strArr: Array<string> = [];
strArr.push('A');

let anyArray: any[]; // prefer to not use

/* multiple Data Type Array */
const foo: (string| number)[] = [1, 'A', 2, 3, 'B'];

/* Tuple (explicit type and size) */
let role: [number, string];
role = [2, 'admin'];
console.log(role);

let employees: [number, string][];
employees = [[1, 'Karina']];
employees.push([1, 'Xiaoting']);
employees.push([1, 'Min']);

/* Tuple with Optional (array with multi Types) */
let arr: [number?, string?] = [];

arr.push(2);
arr.push('karina');
arr.push('minjeong');


/* Tuple Array */
interface Class {
  days: [number, string][];
}

const _class: Class = {
  days: [
    [1, 'apple'],
    [2, 'orange'],
  ]
}

/* Enum */
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Admin');
}

/* TS Set */
let set = new Set<number>();

set.add(3);
set.add(3).add(10).add(10);

set.forEach((item) => console.log(item));

/* Replace Item from array index */
const gipsy = {
  id: 1,
  name: 'gipsy-1',
};
const gipsy2 = {
  id: 2,
  name: 'gipsy-2',
};
const gipsy3 = {
  id: 3,
  name: 'gipsy-3',
};

const gipsy3_v2 = {
  id: 3,
  name: 'gipsy-3 v-2',
};

const gipsyList = [gipsy, gipsy2, gipsy3];

gipsyList.map((gipsy, index) => {
  if (gipsy.id == gipsy3_v2.id) {
    gipsyList[index] = gipsy3_v2;
  }
});

// gipsyList[
//     gipsyList.findIndex((gipsy) => gipsy.id === gipsy3_v2.id)
// ] = gipsy3_v2;

console.log(gipsyList);


// Compare Two Array
const oldI = [
	{
		name: 'John',
	},
	{
		name: 'suzy',
	},
];
const newI = [
	{
		name: 'John',
	},
];

const differences = oldI.filter((o) => {
	for (let n of newI) {
		return o.name != n.name;
	}
});
