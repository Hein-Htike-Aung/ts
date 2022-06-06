/* Exclude Member within union Types */
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T2 = Exclude<string | number | (() => void), Function>;

type availableDrinks = 'coffee' | 'Tea' | 'Lemondae' | 'Milk';
type unlikeDrinks = 'Tea' | 'coffee';

let likeDrinks: Exclude<availableDrinks, unlikeDrinks>;
