import React, { Component } from "react";
import axios from "axios";

export default class Result extends Component {
  state = {
    text: ""
  };

  //ce Hook se lance quand le Composant se lance, j'utilise async/await
  async componentDidMount() {
    // Je lance une requeste GET avec la librairie Axios à partir du backend
    const res = await axios.get("/scrap");
    // Si on reçoit une réponse, on change le state pour l'afficher dans notre composant
    this.setState({
      text: res.data
    });
  }
  render() {
    // ES6 : Destructeur pour avoir un code clean
    const { text } = this.state;
    return (
      <div>
        <label htmlFor="story">Le Scrapping du site :</label>
        <br />
        <textarea
          id="story"
          name="story"
          rows="20"
          cols="200"
          //Default value reçois la valeur du State
          defaultValue={text}
        ></textarea>
      </div>
    );
  }
}
