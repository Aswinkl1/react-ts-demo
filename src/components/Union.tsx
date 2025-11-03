type unionType = {
  status: "loading" | "error" | "success";
};

const Union = (prob: unionType) => {
  let message;
  if (prob.status == "loading") {
    message = "loading";
  } else if ((prob.status = "success")) {
    message = "this is success";
  } else if (prob.status == "error") {
    message = "this is an error";
  }

  return <h1>{message}</h1>;
};

export default Union;
