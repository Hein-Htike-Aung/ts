type User = { name: string; age: number };

const student: User = {
  name: 'xiaoting',
  age: 19,
};

const employee: object = {
  name: 'karina',
  age: 20,
};

// Better Syntax
const person = {
  name: 'john',
  age: 19,
};

console.log(person.name);

/* Add New Properties */
interface objInter  {
  interests: {[key:string]: boolean};
}

const INTERESTS = ['js', 'ts', 'angular'];
const obj:objInter = {
  interests: {}
};

INTERESTS.forEach(interest => {
  // add new Property
  obj.interests[interest] = false;
})

const getInterest = (obj: objInter) => {

  const arr:string[] = [];

  Object.keys(obj.interests).forEach(key => {
    let keyValue = obj.interests[key];
      if( keyValue == true){
        arr.push(key);
      }
  });

  return arr.join(', ');
}

obj.interests['js'] = true;
obj.interests['ts'] = true;

console.log(getInterest(obj));


/* Spread Object */
interface personinfo {
  name: string;
  contact: {};
}

let hero: personinfo = {
  name: 'karina',
  contact: {
    phone: '010132434',
    email: 'ka@gmail.com',
  },
};

const changeObject = (hero: personinfo) => {
  hero.name = null;
  hero.contact['phone'] = null;
  hero.contact['email'] = null;
};

changeObject({...hero, contact: {...hero.contact}});
console.log(hero);

/* Using Optional to prevent (Cannot read properties of Null) */
class Formatter {
  constructor(private value: string){}

  fomat() {
      return `Your formatted string is ${this.value}`
  }
}


const getDivision = (division?: string): Formatter | null => {
  if(division) {
      return new Formatter(division);
  }
  console.log('Your division is blank');
  return null;
}


console.log(getDivision('seoul').fomat());
console.log(getDivision()?.fomat());

/* Non-null assertion operator */
class Entity {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }
}

const validateEntity = (e?: Entity) => {
  if(e == null) {
      throw {}
  }
}
// Compiled with --strictNullChecks
const processEntity = (e?: Entity) => {
  validateEntity(e);
  let s = e!.name; // Assert that e is non-null and access name
  console.log(s);
}

/* Some Vs Includes */
const albums = [
	{ id: 1, name: 'Magnolia' },
	{ id: 1, name: 'The unseen' },
];

const searchObj = { id: 1, name: 'Magnolia' };

// Can compare with id (use comparing object type)
if (albums.some((album) => album.id === searchObj.id)) {
	console.log('Already exists');
} else {
	console.log('Not Exist');
}

// Cannot compare with id (use comparing non-object type)
if (albums.includes(searchObj)) {
	console.log('Already exists');
} else {
	console.log('Not Exist');
}
