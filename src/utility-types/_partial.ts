/* 
Partial (return a type that represents all subsets of a given type) 
*/
interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate };
};

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log(todo2);

/* Partial<Type> makes interface Optional */
interface Name {
  firstName?: string;
  lastName?: string;
}

const createObject = (obj1: Name, obj2: Name) => {
  return {
    ...obj1,
    ...obj2,
    status: 'Nice',
  };
};

const obj = createObject(
  { firstName: 'John', lastName: 'Doe' },
  { lastName: 'Willian' }
);

console.log(obj);
