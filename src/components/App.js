import React, { Component } from "react";

import "../style/App.css";
import UserList from "../containers/users_list";
import UserDetail from "../containers/user_detail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>ReactRedux - Starter : ça marche</h1>
        <UserList />
        <div className="row">
          <UserDetail />
        </div>
      </div>
    );
  }
}

export default App;
