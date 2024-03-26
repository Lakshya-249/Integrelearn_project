import { getToken } from "./auth";

const url1 = "http://localhost:8080/addDoubts";
const url2 = "http://localhost:8080/getDoubts";
const url3 = "http://localhost:8080/deleteDoubts/";
const token = getToken();

export const addDoubts = async (details) => {
  {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(details),
    };
    const response = await fetch(url1, options);
    const data = await response.json();
    console.log(data);
  }
};

export const getDoubts = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url2, options);
  const data = await response.json();
  return data;
};

export const deleteDoubts = async (seckey) => {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url3 + seckey, options);
  const data = await response.json();
  console.log(data);
  return data;
};
