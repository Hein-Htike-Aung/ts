type Listener<EventType> = (ev: EventType) => void;

const createObserver = <EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} => {
  let listeners: Listener<EventType>[] = []; // Closure

  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((l) => l(event));
    },
  };
};

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
}

// Factory Pattern
const createDatabase = <T extends BaseRecord>() => {
  return class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private beforeListiners = createObserver<BeforeSetEvent<T>>();
    private afterListiners = createObserver<AfterSetEvent<T>>();

    private constructor() {}

    set(newValue: T): void {
      this.beforeListiners.publish({
        newValue,
        value: this.db[newValue.id],
      });

      this.db[newValue.id] = newValue;

      this.afterListiners.publish({
        value: newValue,
      });
    }

    get(id: string): T | undefined {
      return this.db[id];
    }

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeListiners.subscribe(listener);
    }

    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterListiners.subscribe(listener);
    }
  };
};

const PokemonDB = createDatabase<Pokemon>();
const pokemonDB = PokemonDB.instance;


const unsubscribe = PokemonDB.instance.onAfterAdd(({ value }) => {
  console.log(value);
});

pokemonDB.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
});

unsubscribe();

pokemonDB.set({
  id: 'Bulbasaur',
  attack: 100,
  defense: 20,
});

// console.log(pokemonDB.get('Bulbasaur'));
