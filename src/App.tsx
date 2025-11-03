import "./App.css";
import { Child } from "./components/Child";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import Person from "./components/person";
import Union from "./components/Union";

let name = {
  first: "Aswin",
  last: "K L",
};

let hobbies = ["playing", "cricket", "fishing"];
function App() {
  return (
    <>
      <Greet name={"Aswin"} />

      <Person name={name} age={23} isLogedIn={true} hobbies={hobbies} />

      <Child>
        <Heading>hello bro </Heading>
      </Child>

      <Union status="loading" />
    </>
  );
}

export default App;
