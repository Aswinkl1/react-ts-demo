import type { Person } from "./person";
const person = ({ name, isLogedIn, hobbies, age }: Person) => {
  return (
    <>
      {isLogedIn ? (
        <h1>
          My name is {name.first} {name.last} and i am {age} years old
        </h1>
      ) : (
        <h1>user logout</h1>
      )}

      {hobbies.map((hob, i) => {
        return <h1 key={i}>{hob}</h1>;
      })}
    </>
  );
};

export default person;
