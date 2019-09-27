import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      index: 0
    };
  }

  handleNext = () => {
    if (this.state.index < this.state.data.length) {
      this.setState({ index: this.state.index + 1 });
      console.log(this.state.index);
    }
  };

  handlePrevious = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
      console.log(this.state.index);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MainContent
          data={this.state.data}
          index={this.state.index}
          handleNext={this.handleNext}
          handlePrevious={this.handlePrevious}
        />
      </div>
    );
  }
}

export default App;
