import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header.js";
import Home from "./components/Home";
class App extends Component {
  state = {
    homeMounted: true,
  };

  onChangeMounted = () => {
    this.setState({
      homeMounted: !this.state.homeMounted,
    });
  };

  render() {
    const user = {
      name: "Yasir",
      hobbies: ["Futbol", "reading", "bikeng"],
    };

    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = <Home name={"Enes"} age={27} user={user} />;
    }

    return (
      <div>
        <Header />
        {homeCmp}
        <button onClick={()=>this.onChangeMounted()} >Unmount Component</button>
      </div>
    );
  }
}

export default App;
