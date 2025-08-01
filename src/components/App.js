// src/App.js
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      position: 0, // Ball starts at left = 0px
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.showBall) {
      this.setState((prevState) => ({
        position: prevState.position + 5,
      }));
    }
  }

  buttonClickHandler() {
    this.setState({ showBall: true });
  }

  render() {
    return (
      <div className="playground">
        {this.state.showBall ? (
          <div
            className="ball"
            style={{ left: `${this.state.position}px`, position: "absolute" }}
          ></div>
        ) : (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
