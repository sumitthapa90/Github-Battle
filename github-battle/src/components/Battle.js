import React from "react";
import { Link } from "react-router-dom";

class Battle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="battle-container">
          <h2>Instruction</h2>
          <div className="flex-sa">
            <div className="instruction">
              <h3>Enter Two Github Users</h3>
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="instruction">
              <h3>Battle</h3>
              <i className="fas fa-fighter-jet"></i>
            </div>
            <div className="instruction">
              <h3>See The Winner</h3>
              <i className="fas fa-trophy"></i>
            </div>
          </div>
          <h1>Players</h1>
        </div>

        <div className="flex-sa">
          <h4>Player One</h4>
          <h4>Player Two</h4>
        </div>

        <div className="flex-sa">
          {this.props.handleUser1Visibility()}
          {this.props.handleUser2Visibility()}
        </div>

        {this.props.data.isUser1present === true &&
        this.props.data.isUser2present === true ? (
          <>
            <div className="battle-box">
              <Link to="/battle/result">
                {" "}
                <button className="btn btn-secondary">BATTLE</button>
              </Link>{" "}
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Battle;
