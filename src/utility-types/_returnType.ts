declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;

type T1 = ReturnType<(s: string) => void>;

type T2 = ReturnType<<T>(t: T) => T>;

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;

type T4 = ReturnType<typeof f1>;

type T5 = ReturnType<any>;

type T6 = ReturnType<never>;

const fun = (): { id: number } => {
  return {
    id: 1,
  };
};

type returnTypeOfFun = ReturnType<typeof fun>;
