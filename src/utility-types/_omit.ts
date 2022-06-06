/* Opposite of Pick */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoWithoutCompletedAndCreated = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoWithoutCompletedAndCreated = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

todoInfo;
