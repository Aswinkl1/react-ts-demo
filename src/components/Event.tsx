import type React from "react";

type EventProb = {
  handleClick: () => void;
  handleClickWithPassingEvent: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  id: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Event = (prob: EventProb) => {
  return (
    <>
      <button onClick={prob.handleClickWithPassingEvent}>click me dady</button>
      <input type="text" onChange={prob.handleChange} />
    </>
  );
};

export default Event;
