import { v4 as uuidv4 } from "uuid";
import { getToken } from "./auth.js";

const url = "http://localhost:8080/getschedules";
const url2 = "http://localhost:8080/addschedule";
const url3 = "http://localhost:8080/deleteschedule/";
const token = getToken();

export const schedules = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
  // console.log(data);
};

schedules();

export const addschedules = async (details) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  };
  const response = await fetch(url2, options);
  const data = await response.json();
  console.log(data);
};

// addschedules();

export const delschedules = async (seckey) => {
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
  return data;
  // console.log(data);
};
