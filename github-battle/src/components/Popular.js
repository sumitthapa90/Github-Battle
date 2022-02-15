import React from "react";
import Repos from "./Repos";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLang: "All",
      repos: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectLang}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          repos: data.items,
        }));
      });
  }

  // componentDidUpdate(_prevProps, prevState) {
  //   if (prevState.selectedLanguage !== this.state.selectedLanguage) {
  //     fetch(
  //       `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectedLanguage}&sort=stars&order=desc&type=Repositories`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({ repos: data.items });
  //       });
  //   }
  // }

  handleLang = (lang) => {
    this.setState((prevState) => ({
      selectLang: lang,
    }));
  };

  handleRepos = (repos) => {
    console.log(repos, "this is rpos");
    return repos.map((repo, index) => {
      return <Repos details={repo} index={index} />;
    });
  };

  render() {
    let languages = ["All", "Javascript", "Rubby", "React", "Python"];
    console.log(this.state.repos);
    return (
      <>
        <header>
          <nav className="lang-nav">
            <ul className="flex-sa">
              {languages.map((lang) => {
                return (
                  <li
                    onClick={() => this.handleLang(lang)}
                    className={
                      this.state.selectLang === lang ? "active-lang" : ""
                    }
                  >
                    {lang}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <div>
          {this.state.repos === null ? (
            <>
              <h1>Fetching....</h1>
            </>
          ) : (
            this.handleRepos(this.state.repos)
          )}
        </div>
      </>
    );
  }
}

export default Popular;
