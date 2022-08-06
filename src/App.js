import "./App.css";
import React from "react";
import CardList from "./component/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      animes: [
        {
          title: "Demon Slayer",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
          id: 1,
          linkUrl: "demonslayer",
        },

        {
          title: "Tokyo Revengers",
          imageUrl:
            "https://www.xtrafondos.com/wallpapers/personajes-de-tokyo-revengers-8137.jpg",
          id: 2,
          linkUrl: "tokyorevengers",
        },

        {
          title: "Jujutsu Kaisen",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
          id: 3,
          linkUrl: "jujutsukaisen",
        },

        {
          title: "Mushoko Tensei",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMGM2MzA5YzYtODc0Ni00ZjU4LWI4ZmUtZGJjNGU0ODY1MGJkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
          id: 4,
          linkUrl: "Mushoku Tensei",
        },
      ],
    };
  }

  render() {
    const { animes } = this.state;

    return <CardList animes={animes} />;
  }
}

export default App;

// I created this project for just practising basic of react js
