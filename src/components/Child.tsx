import React from "react";

type ChildType = {
  children: React.ReactNode;
};
export const Child = (prob: ChildType) => {
  return <div>{prob.children}</div>;
};
