import { useState } from "react";

type userAuth = {
  name: string;
  email: string;
};
export default function () {
  const [isLoggedIn, setisLoggedIn] = useState<userAuth | null>(null);

  function handleOnClick() {
    setisLoggedIn({ name: "aswin", email: "aswin@gmail.com" });
  }
  return (
    <>
      <h1>HI {isLoggedIn?.name}</h1>
      <h1>Your email is {isLoggedIn?.email} </h1>

      <button onClick={handleOnClick}>login</button>
      <button onClick={() => setisLoggedIn(null)}>logout</button>
    </>
  );
}
