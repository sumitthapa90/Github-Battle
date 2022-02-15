import React from "react";

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let details = this.props.details;
    console.log(details, "hello");
    return (
      <>
        <div>
          <div className="repo-details">
            <h1>#{this.props.index + 1}</h1>
            <div className="img-container">
              <img src={details.owner.avatar_url} alt="repo" />
            </div>

            <h2>{details.name}</h2>

            <ul>
              <li>
                <i class="fas fa-user"></i>
                {details.name}
              </li>
              <li>
                <i class="fas fa-star"></i> {details.stargazers_count}
              </li>
              <li>
                <i class="fas fa-code-branch"></i> {details.forks_count}
              </li>
              <li>
                <i class="fas fa-exclamation-triangle"></i>
                {details.open_issues_count}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Repos;
