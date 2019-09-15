import React, { Component } from "react";

import "../style/App.css";
import UserList from "../containers/users_list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>ReactRedux - Starter : ça marche</h1>
        <UserList />
      </div>
    );
  }
}

export default App;
