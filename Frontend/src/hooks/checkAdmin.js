const checkAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.role === "admin") {
    return true;
  }
};

export default checkAdmin;
