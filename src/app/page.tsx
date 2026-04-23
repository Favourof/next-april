import { stringify } from "querystring";

export default function Home() {
  // let name = 26
  // name = 'favour'

  // let address: "bayo";
  // let name: string | number = "favour";
  // const age: number = 66;
  // const check: boolean = true;
  // let gender = "kdkjcm";
  // address = "bayo";

  // gender = "675";

  // console.log(age);
  // console.log(address);

  // name = "false";

  // const justLog = (name: string = "favour") => {
  //   console.log(name);
  // };

  // console.log(name);

  // justLog("bayo");

  // type Array
  const person: (string | number)[] = [
    "bayo",
    "tayo",
    "ayo",
    9,
    "hhgcgh",
    "nhjjhv hj",
  ];
  person.push("hello");
  // const person1: [string] = ["bayo", "tayo", "ayo"];

  const man: Array<string> = ["tayo", "james"];

  man.push("john");

  // tuple
  const location: [string, number] = ["hello", 2];
  console.log(location);

  // Array of object

  type color = "white" | "black";
  //  const part:{}[] = [{}]

  const user: [
    //   { name: string; age: number; color?: color },
    { name: string; age: number; color?: "black" | "white" },
    { gender: string },
  ] = [{ name: "favour", age: 70 }, { gender: "male" }];

  // object

  const user1: { name: string; age: number }[] = [{ name: "favour", age: 20 }];

  user1.push({ name: "bayo", age: 88 });

  // interface annotation
  interface car {
    name: string;
    model: string;
    year: number;
    color?: color;
  }

  interface carOwner {
    name: string;
    age: number;
  }

  // nested interface
  interface fullCar extends car {
    id: number;
    craeteAt: number;
    updateAt: number;
    owner: carOwner;
  }

  const car8: fullCar = {
    name: "micra",
    model: "rtut",
    year: 2024,
    color: "white",
    id: 78,
    craeteAt: 2023,
    updateAt: 2025,
    owner: { name: "Bayo", age: 88 },
  };

  const car1: car = {
    name: "micra",
    model: "rtut",
    year: 2024,
    color: "white",
  };
  const car2: car = {
    name: "camry",
    model: "rtut",
    year: 2024,
  };
  const car3: car = {
    name: "Rolls royce",
    model: "rtut",
    year: 2024,
    color: "black",
  };
  const car4: car = {
    name: "Benz",
    model: "rtut",
    year: 2024,
    color: "white",
  };

  type cars = {
    name: string;
    age: number;
  };

  const car: cars = { name: "lexus", age: 6 };

  // use type when you are dealing with primities data
  //  use interface when you are dealing with object or array of object

  //  Function Typing

  function UserName(name: string): boolean {
    return true;
  }

  function calculate(a: number, b?: number): number {
    // const add = a + b;
    return a + b;
  }

  function postLiveBlog(blog: string, pupblished: boolean = false): string {
    return `The ${blog} is ${pupblished ? "Live" : "Draft"}`;
  }
  console.log(calculate(5));

  console.log(postLiveBlog("Typescript"));

  console.log(postLiveBlog("Typescript", true));

  //  function printName(name: string): never {
  //   while (lookup...) {

  //   }
  //  }

  UserName("99");
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
