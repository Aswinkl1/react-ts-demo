import type { Name } from "./name";

export type Person = {
  name: Name;
  age: number;
  isLogedIn: boolean;
  hobbies: String[];
};

// we need to write the types in another file if the  type is becoming big
// we can also reuse the types if we wanted to
