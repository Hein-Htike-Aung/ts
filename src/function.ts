/* Function Return Type */
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log('Result => ' + num);
};

printResult(add(2, 29));

/* Never Type (never produce return value)*/
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};
generateError('An error occured', 500);

/* Function Type using in Callback*/
type CallBack = (num: number) => void;
const addAndHandle = (n1: number, n2: number, callback: CallBack) => {
  const result = n1 + n2;
  callback(result);
};

addAndHandle(3, 10, (num) => console.log('Result is ' + num));

/* Function Type */
type MathFun = (a: number, b: number) => number;

const addTwo: MathFun = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(3, 2));

const printOutcome = (num: number, callback: (a: number) => void): void => {
  callback(num);
};

printOutcome(addTwo(32, 14), (num) => console.log('Result -> ' + num));

/* Dynamic function */
const appEmo = (fixed: string) => (dynamic: string) => fixed + dynamic;

const appendEmoji = (fixed: string) => {
  return (dynamic: string) => {
    return fixed + dynamic;
  };
};

const rain = appendEmoji('raining');
const sunny = appendEmoji('sunny');

console.log(rain('today'));
console.log(rain('tomorrow'));
console.log(sunny('today'));

/* Return Object */
type CanSayType = (message: string) => void;
const sayHello = (
  name: string
): {
  canSay: (message: string) => void;
} => {
  return {
    canSay: (message: string): void => {
      console.log(name + message);
    },
  };
};

let obj = sayHello('karina');
obj.canSay(' Hello');

/* Key Picker */
interface PersonInfo {
  name: string;
  status: string;
}

const getData = (person: PersonInfo): ((pick: string) => string) => {
  return (pick: string) => {
    return person[pick];
  };
};

const picker = getData({ name: 'xiaoting', status: 'pretty' });
console.log(picker('name'));

/* Return Object */
const sayHi = (
  name: string
): {
  canSay: (message: string) => (message2?: string) => void;
} => {
  return {
    canSay: (message: string): ((message2?: string) => void) => {
      message = message.toUpperCase();

      return (message2 = '') => {
        console.log(`${name} is saying ${message} - ${message2}`);
      };
    },
  };
};

let object = sayHi('karina');
let funWithinfun = object.canSay('hello');
funWithinfun();
funWithinfun('Nice to Meet you');
