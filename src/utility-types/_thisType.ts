type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

/* Simplfy */
interface MyObj {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObj & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  },
};

// binding the return method inside sayHello Method
myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return 'Hello World';
  },
});

console.log(myObject.sayHello());
