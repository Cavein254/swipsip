export const switSipFun = () => {
  const switSip = localStorage.getItem("switsip");
  if (switSip) {
    return JSON.parse(switSip);
  }
  return "empty";
};
