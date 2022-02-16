import React from "react";
import { Link } from "react-router-dom";

class BattleResult extends React.Component {
  constructor(props) {
    super(props);
  }

  handleWinner = (score1, score2) => {
    console.log(typeof score1, typeof score1);
    if (score1 > score2) {
      return "Winner";
    } else if (score1 < score2) {
      return "Loser";
    } else if (score1 === score2) {
      return "Tie";
    }
  };

  render() {
    let user1 = this.props.data.user1data;
    let user2 = this.props.data.user2data;

    let score1 = user1 ? user1.public_repos + user1.followers : 0;
    let score2 = user2 ? user2.public_repos + user2.followers : 0;

    return (
      <>
        <div className=" flex justify-evenly align-center">
          {user1 && user2 ? (
            <>
              <div className="repo-details flex-26">
                <h1>{this.handleWinner(score1, score2)}</h1>
                <div className="img-container">
                  <img
                    className="full-width"
                    src={user1.avatar_url}
                    alt="user"
                  />
                </div>
                <h6>Score: {score1}</h6>
                <br />
                <h2>{user1.login}</h2>
                <ul>
                  <li>
                    <i class="fas fa-user"></i> {user1.name || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-compass"></i> {user1.location || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-briefcase"></i> {user1.company || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-users"></i> {user1.followers} Followers
                  </li>
                  <li>
                    <i class="fas fa-user-friends"></i> {user1.following}{" "}
                    Following
                  </li>
                  <li>
                    <i class="fas fa-code"></i> {user1.public_repos}{" "}
                    Repositories
                  </li>
                </ul>
              </div>
              <div className="repo-details flex-26">
                <h1>{this.handleWinner(score2, score1)}</h1>
                <div className="img-container">
                  <img
                    className="full-width"
                    src={user2.avatar_url}
                    alt="user"
                  />
                </div>
                <h6>Score: {score2}</h6>
                <br />
                <h2>{user2.login}</h2>
                <ul>
                  <li>
                    <i class="fas fa-user"></i> {user2.name || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-compass"></i> {user2.location || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-briefcase"></i> {user2.company || "N/A"}
                  </li>
                  <li>
                    <i class="fas fa-users"></i> {user2.followers} Followers
                  </li>
                  <li>
                    <i class="fas fa-user-friends"></i> {user2.following}{" "}
                    Following
                  </li>
                  <li>
                    <i class="fas fa-code"></i> {user2.public_repos}{" "}
                    REpositories
                  </li>
                </ul>
              </div>
            </>
          ) : (
            "Something went wrong :("
          )}
        </div>
        <div className="battle-box">
          <Link to="/battle">
            <button className="btn btn-secondary">RESET</button>
          </Link>
        </div>
      </>
    );
  }
}

export default BattleResult;
