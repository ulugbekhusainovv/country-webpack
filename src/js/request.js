import loaderToggle from "./loader";

const request = async (resurse) => {
  loaderToggle(true);
  const req = await fetch(resurse);

  if (!req.ok) {
    loaderToggle(false);
    throw new Error("Something went wrong!");
  }
  const data = await req.json();
  loaderToggle(false);

  return data;
};
export default request;
