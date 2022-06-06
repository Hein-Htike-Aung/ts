/* Interface like type but it can't work with primitive type */
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // Optional
}

const user2: UserInterface = {
  id: 4,
  name: 'karina',
};

console.log(user2);

/* Function inside the Interface */
interface PersonInfoInter {
  name: string;
  age?: number;
  register: () => string;
}

const user: PersonInfoInter = {
  name: 'karina',
  register() {
    return this.name;
  },
};

console.log(user);
console.log(user.register());

/* Relationship Between Interface And Object */
interface Teacher {
  name: string;
  phone: string;
}

let teacher: Teacher;

let obj = {
  name: 'Karina',
  phone: '09434343434',
  email: 'karina@gmail.com',
};

teacher = obj;

console.log(teacher);
