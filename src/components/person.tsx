type personType = {
  name: {
    first: String;
    last: String;
  };
  age: number;
  isLogedIn: boolean;
  hobbies: String[];
};

const Person = (prob: personType) => {
  return (
    <>
      {prob.isLogedIn ? (
        <h1>
          My name is {prob.name.first} {prob.name.last} and i am {prob.age}{" "}
          years old
        </h1>
      ) : (
        <h1>user logout</h1>
      )}

      {prob.hobbies.map((hob, i) => {
        return <h1 key={i}>{hob}</h1>;
      })}
    </>
  );
};

export default Person;
