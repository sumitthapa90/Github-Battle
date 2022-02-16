import React from "react";
import { Route, Switch } from "react-router-dom";
import Popular from "./Popular";
import Battle from "./Battle";
import BattleResult from "./BattleResult";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username1: "",
      username2: "",
      isUser1Present: false,
      isUser2Present: false,
      user1data: null,
      user2data: null,
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.isUser1present !== this.state.isUser1present) {
      fetch(`https://api.github.com/users/${this.state.username1}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user1data: data }));
    } else if (prevState.isUser2present !== this.state.isUser2present) {
      fetch(`https://api.github.com/users/${this.state.username2}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user2data: data }));
    }
  }

  handleUser1Input = ({ target }) => {
    let value = target.value;
    this.setState((prevState) => ({
      username1: value,
    }));
  };

  handleUser2Input = ({ target }) => {
    let value = target.value;
    this.setState((prevState) => ({
      username2: value,
    }));
  };

  handleUser1Submit = (event) => {
    event.preventDefault();
    this.setState({ isUser1present: true });
  };

  handleUser2Submit = (event) => {
    event.preventDefault();
    this.setState({ isUser2present: true });
  };

  handleUser1Presence = () => {
    this.setState((prevState) => ({
      isUser1present: false,
      username1: "",
    }));
  };

  handleUser2Presence = () => {
    this.setState((prevState) => ({
      isUser2present: false,
      username2: "",
    }));
  };

  handleUser1Visibility = () => {
    if (this.state.isUser1present === true && this.state.user1data) {
      return (
        <>
          <div className=" flex-48 profile flex justify-between align-center">
            <div className="flex justify-between align-center">
              <div className="img-box">
                <img
                  src={this.state.user1data.avatar_url}
                  className="full-width"
                  alt="img"
                />
              </div>
              <h4>{this.state.user1data.login}</h4>
            </div>
            <i
              onClick={() => {
                this.handleUser1Presence();
              }}
              class="far fa-times-circle"
            ></i>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form
            className=" flex-48 flex justify-between align-center"
            onSubmit={(event) => this.handleUser1Submit(event)}
          >
            <input
              value={this.state.username1}
              onChange={(event) => this.handleUser1Input(event)}
              id="player-1"
              className="flex-69"
              type="text"
              placeholder="Enter Github Username.."
            />
            <input className="flex-30" type="submit" value="Submit" />
          </form>
        </>
      );
    }
  };

  handleUser2Visibility = () => {
    if (this.state.isUser2present === true && this.state.user2data) {
      return (
        <>
          <div className=" flex-48 profile flex justify-between align-center">
            <div className="flex justify-between align-center">
              <div className="img-box">
                <img
                  src={this.state.user2data.avatar_url}
                  className="full-width"
                  alt="img"
                />
              </div>
              <h4>{this.state.user2data.login}</h4>
            </div>
            <i
              onClick={() => {
                this.handleUser2Presence();
              }}
              class="far fa-times-circle"
            ></i>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form
            className="flex-48 flex justify-between align-center"
            onSubmit={(event) => this.handleUser2Submit(event)}
          >
            <input
              value={this.state.username2}
              onChange={(event) => this.handleUser2Input(event)}
              id="player-2"
              className="flex-69"
              type="text"
              placeholder="Enter Github Username.."
            />
            <input className="flex-30" type="submit" value="Submit" />
          </form>
        </>
      );
    }
  };
  render() {
    return (
      <>
        <div className="main">
          <Switch>
            <Route path="/" exact>
              <Popular />
            </Route>

            <Route path="/battle" exact>
              <Battle
                data={this.state}
                handleUser1Visibility={() => this.handleUser1Visibility()}
                handleUser2Visibility={() => this.handleUser2Visibility()}
              />
            </Route>

            <Route path="/battle/result">
              <BattleResult data={this.state} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default Main;
