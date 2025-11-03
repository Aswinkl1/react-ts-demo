type HeadingProb = {
  children: string;
};
export const Heading = (prob: HeadingProb) => {
  return <div>{prob.children}</div>;
};
