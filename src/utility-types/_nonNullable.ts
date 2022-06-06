type anyType = NonNullable<
  string[] | null | undefined | unknown | never | void | any
>;

type unknownType = NonNullable<
  string[] | null | undefined | unknown | never | void
>;

type nonNullableType = NonNullable<string[] | null | undefined | never | void>;

/* need to Enable strictNullChecks in tsconfig.json */
interface StarshipProperties {
  color?: 'red' | 'blue';
}

const paintStarship = (
  id: number,
  color: NonNullable<StarshipProperties['color']>
) => {
  console.log(id);
  console.log(color);
};

// paintStarship(1, undefined); Error
