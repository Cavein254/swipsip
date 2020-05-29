export const tokenFun = () => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    return storedToken;
  }
  return "empty";
};

export const isSuccessFun = () => {
  const storedSucess = localStorage.getItem("isSuccess");
  if (storedSucess) {
    return storedSucess;
  }
  return "empty";
};

export const adminFun = () => {
  const storedAdmin = localStorage.getItem("admin");
  if (storedAdmin) {
    return storedAdmin;
  }
  return "empty";
};
