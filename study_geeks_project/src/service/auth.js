let url = "http://localhost:8080/api/auth/login/";
let url2 = "http://localhost:8080/api/auth/register/";

export const login = async (e, details) => {
  const { email } = await details;
  const option = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(details),
    mod: "no-cors",
  };
  let response;
  if (email) {
    localStorage.setItem("email", details.email);
    response = await fetch(url + "admin", option);
  } else {
    localStorage.setItem("username", details.username);
    response = await fetch(url + "user", option);
  }
  if (response.status == 403) {
    e.target.value = "*Username Password Wrong*!!";
    e.target.style.color = "black";
    return false;
  }
  const data = await response.json();
  localStorage.setItem("token", data.token);
  console.log(data);
  return true;
};

export const register = async (e, details) => {
  const navigate = "";
  const { email } = await details;
  const option = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(details),
    mod: "no-cors",
  };
  let response;
  if (email) {
    localStorage.setItem("email", details.email);
    response = await fetch(url2 + "admin", option);
  } else {
    localStorage.setItem("username", details.std_username);
    response = await fetch(url2 + "user", option);
  }
  if (response.status == 403) {
    e.target.value = "*User with same info exists already*!!";
    e.target.style.color = "black";
    return false;
  }
  localStorage.setItem("firstname", details.firstname);
  localStorage.setItem("lastname", details.lastname);
  const data = await response.json();
  localStorage.setItem("token", data.token);
  console.log(data);
  return true;
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token == null || token.trim() == "") {
    return false;
  }
  return true;
};

export const getName = () => {
  const name =
    localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
  return name;
};

export const getEmail = () => {
  const email = localStorage.getItem("email");
  return email;
};

export const getUser = () => {
  const uname = localStorage.getItem("username");
  return uname;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
