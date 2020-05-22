import { useState } from "react";
import axios from "axios";

export default function Authservices(initial) {
  const [dataService, setDataService] = useState(initial);

  const services = axios.create({
    baseURL: "http://localhost:5000/auth",
    withCredentials: true,
  });

  const login = (username, password) => {
    services
      .post("/login", { username, password })
      .then((response) => setDataService(response.data))
      .catch((err) => {
        setDataService({
          loggedInUser: null,
        });
      });
  };

  const signup = (username, password) => {
    services
      .post("/signup", { username, password })
      .then((response) => setDataService(response.data))
      .catch((err) => {
        setDataService({
          loggedInUser: null,
        });
      });
  };

  const loggedin = () => {
    services
      .get("/loggedin")
      .then((response) => setDataService(response.data))
      .catch((err) => {
        setDataService({
          loggedInUser: null,
        });
      });
  };

  const logout = () => {
    services.post("/logout", {}).then((response) => response.data);
  };

  return [dataService, setDataService, login, signup, loggedin, logout];
}
