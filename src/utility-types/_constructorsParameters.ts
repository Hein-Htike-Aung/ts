type T0 = ConstructorParameters<ErrorConstructor>;

type T1 = ConstructorParameters<FunctionConstructor>;

type T2 = ConstructorParameters<RegExpConstructor>;

type T3 = ConstructorParameters<any>;

interface PersonInterface {
  new (id: number, name: string);
}

type T4 = ConstructorParameters<PersonInterface>;
