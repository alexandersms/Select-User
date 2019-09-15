import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    myActiveUser: state.activeUser
  };
}

class UserDetail extends Component {
  render() {
    const { myActiveUser } = this.props;
    if (!myActiveUser) {
      return <div>Selectionnez un utilisateur pour démarrer</div>;
    }
    return (
      <div>
        <h3>Détail de {myActiveUser.name}</h3>
        <ul className="col-md-6">
          <li>Id : {myActiveUser.id}</li>
          <li>Role : {myActiveUser.role}</li>
          <li>Actif : {myActiveUser.active}</li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserDetail);
