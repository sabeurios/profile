import "./App.css";
import React from "react";
import Profile from "./profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      profiles: [
        {
          name: "Gérard Depardieu",
          bio:
            "acteur, humoriste, réalisateur, producteur de cinéma, producteur de télévision et homme d'affaires français. ",
          linkUrl:
            "https://fr.web.img4.acsta.net/pictures/15/07/27/15/04/271855.jpg",
          description: "Acteur"
        },
        {
          name: "Marlon Brando",
          bio:
            "acteur, humoriste, réalisateur, producteur de cinéma, producteur de télévision et homme d'affaires français. ",
          linkUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg",
          description: "Realisateur"
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div>
          {this.state.profiles.map((elt, curentIndex) => (
            <button className="user-button"
              onClick={() => {
                this.setState({ index: curentIndex });
                alert("Profile user is: " + elt.name);
              }}
            >
              {elt.name}
            </button>
          ))}
        </div>
        <Profile
          name={this.state.profiles[this.state.index].name}
          bio={this.state.profiles[this.state.index].bio}
          linkUrl={this.state.profiles[this.state.index].linkUrl}
          description={this.state.profiles[this.state.index].description}
        />
      </div>
    );
  }
}
export default App;
