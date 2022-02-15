import React from "react";
import { Route, Switch } from "react-router-dom";
import Popular from "./Popular";
import Battle from "./Battle";
import BattleResult from "./BattleResult";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Switch>
            <Route path="/" exact>
              <Popular />
            </Route>

            <Route path="/battle">
              <Battle />
            </Route>

            <Route path="/battle/result">
              <BattleResult />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default Main;
