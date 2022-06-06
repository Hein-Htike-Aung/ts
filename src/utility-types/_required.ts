interface Props {
  a?: number;
  b?: number;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };
const obj2: Required<Props> = { a: 5, b: 4 };
