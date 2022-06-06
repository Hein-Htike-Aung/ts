interface Todo {
  title: string;
}

const readonlyFun = (todo: Readonly<Todo>) => {
  // todo.title = ''; Error
};

readonlyFun({ title: 'Write Code' });
