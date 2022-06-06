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
}

const createDatabase = <T extends BaseRecord>() => {
  return class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }

    get(id: string): T | undefined {
      return this.db[id];
    }
  };
};

const PokemonDB = createDatabase<Pokemon>();
const pokemonDB = PokemonDB.instance;

PokemonDB.instance.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
});

console.log(pokemonDB.get('Bulbasaur'));
