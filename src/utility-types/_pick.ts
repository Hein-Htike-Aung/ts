interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoWithTitleOrCompleted = Pick<Todo, 'title' & 'completed'>;
type TodoWithTitleAndCompleted = Pick<Todo, 'title' | 'completed'>;

const todo: TodoWithTitleAndCompleted = {
  title: 'Clean room',
  completed: false,
};

console.log(todo);
