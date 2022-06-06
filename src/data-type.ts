/* 
string, number, boolean, array, any, void, null, tuple, enum, generic, unknonw
*/

const arName = '';
const arName2 = '';

const _name = arName ?? 'Karina';
const _name2 = arName2 || 'Ning Ning';

console.log(_name);
console.log(_name2);

/* boolean from string */
const name3 = '';
const boo: boolean = !!name3;

console.log(boo);

/* DataType (JS uses dynamic(runtime) type while TS uses static type)*/
const add = (
	num1: number,
	num2: number,
	printResult: boolean,
	phrase: string,
) => {
	return printResult ? phrase + (num1 + num2) : 'No Result';
};

let declareVariable: number;
const printResult = true;
let resultPharse = 'Result is: ';
// resultPharse = 9; // Error

console.log(add(3, 14, printResult, resultPharse));

/* Unions */
// setting null as default value, when dont know upcomming DataType
let errorMessage: string | null = null;

const combine = (
	input1: number | string,
	input2: number | string,
	result: 'as-number' | 'as-text', // literal unions type
) => {
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		result === 'as-number'
	) {
		return +input1 + +input2;
	} else {
		return input1.toString() + input2.toString();
	}
};

console.log(combine(2, 3, 'as-number'));
console.log(combine('2', '30', 'as-number'));
console.log(combine('John', 'Doe', 'as-text'));

/* Type Aliases can work with primitive & Object (Custom Type) */
type Combinable = number | string;
const combineTwoElement = (input1: Combinable, input2: Combinable) => {};

type PopularTag = string;
type MapbePopularTag = PopularTag | null;

const pupulatTag: PopularTag[] = ['coffee', 'bread'];

type UserType = {
	id: number;
	name: string;
	age?: number;
};

const user1: UserType = {
	id: 3,
	name: 'xiaoting',
	// age: 18
};

type fnType = (n1: number) => number;

const mix = (fn: fnType) => {
	fn(2);
};

mix((n: number): number => {
	return n;
});

/* Type Assertion */
let cid: unknown = 2;

let customerId = <number>cid;
let cusId = cid as number;

// assigning to specific type
let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number;

/* Unknown Type */
let unknownType: unknown; // better version of any
let stringType: string;
let anyType: any;

unknownType = 2;
unknownType = 'John';

stringType = anyType;

// need type assertion
let v1: string = <string>unknownType;
// need extra type checking for unknown Type
if (typeof unknownType === 'string') {
	stringType = unknownType;
}

// Switch

const num = -2;

switch (true) {
	case num > 0:
		console.log('Greater Than Zero');
		break;
	case num < 0:
		console.log('Less Than Zero');
		break;
	default:
		console.log('Zero');
		break;
}


/* Shorter way of ternary */
var show = true;
console.log(show && 'Shorter way of tarnary without else');
