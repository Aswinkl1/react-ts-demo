type greetType = {
  name: String;
};

export default function (prob: greetType) {
  return <h1> Hi {prob.name}</h1>;
}
