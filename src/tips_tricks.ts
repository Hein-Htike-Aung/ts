/* use && in effective way */
const email = 'test@example.com';
const username = 'John';

const payload = {
	...(email && { email }),
	...(username && { username }),
};

const arrayPayload = [...(email && [email]), ...(username && [username])];

console.log(payload);
console.log(arrayPayload);

/* Should not use let in try catch block */
async function getResult(num: number): Promise<number | Error> {
	if (num === 0) throw new Error('An Error');

	return num;
}

const tryToCatch = async (fn: Function, ...args: any) => {
	try {
		return [null, await fn(...args)];
	} catch (e) {
		return [e];
	}
};

/* Should not use let in try catch block */
// async function run() {
// 	let result;
// 	try {
// 		result = await getResult(0);
// 	} catch (error) {
// 		console.log('ErrorHandled');
// 	}

// 	console.log({ result });
// }

async function run() {
	const [error, result] = await tryToCatch(getResult, 0);

	if (error) {
		console.log(error);
		return error;
	}

	console.log({ result });
}

run();

/* 
Curry Function 
(function should not effect the outside of the scope)
*/
// const curryAdd = (numOne: number) => {
// 	return function (numTwo: number) {
// 		return numOne + numTwo;
// 	};
// };

const curryAdd = (numOne: number) => (numTwo: number) => numOne + numTwo;

console.log(curryAdd(3)(1));

/* Remove falsy values from array */
const containsFalsy = [null, '1', undefined, '4', 0, 5];

console.log(containsFalsy.filter(Boolean));
