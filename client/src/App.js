import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Authservices from "./components/Auth/Authservices";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialValue = { loggedInUser: null };
  const [
    dataService,
    setDataService,
    login,
    signup,
    loggedin,
    logout,
  ] = Authservices(initialValue);

  const fetchUser = () => {
    loggedin();
  };

  const getUser = (user) => {
    setDataService({ loggedInUser: user });
  };

  useEffect(() => {
    loggedin();
  }, [dataService.loggedInUser]);

  if (dataService.loggedInUser === null) {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                dataService={dataService}
                login={login}
                getUser={getUser}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup
                dataService={dataService}
                signup={signup}
                getUser={getUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  } else {
    return <h1>Estoy logeado</h1>;
  }
}

export default App;
