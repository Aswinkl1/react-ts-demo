import React from "react";

type typeFor = {
  styles: React.CSSProperties;
};

export const typeForCss = (prob: typeFor) => {
  return <div style={prob.styles}>typeForCss</div>;
};

export default typeForCss;
