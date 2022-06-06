/*
 Record<Keys, Type> is object that stores keys as key and value as Object
*/
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

console.log(cats.miffy);
console.log(cats.boris);
console.log(cats.mordred);


/* Use Record as Map */
interface PersonInfo {
  id: number;
  firstName: string;
  lastName: string;
}

class Resource {
  private resource: Record<number, PersonInfo> = {};

  setData(personInfo: PersonInfo) {
    this.resource[personInfo.id] = personInfo;
  }

  getData(id: number) {
    return this.resource[id];
  }
}

const resource = new Resource();
resource.setData({
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
});

console.log(resource.getData(1));
