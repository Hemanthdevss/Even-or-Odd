import React, { Component } from "react";
import "./index.css";

class EvenOddApp extends Component {
  state = {
    count: 0,
    isEven: true,
  };

  handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 101); // Generate random number between 0 to 100
    const newCount = this.state.count + randomValue;

    this.setState({
      count: newCount,
      isEven: newCount % 2 === 0,
    });
  };

  render() {
    const { count, isEven } = this.state;
    let message = "";

    if (isEven) {
      message = "Count is Even";
    } else {
      message = "Count is Odd";
    }

    return (
      <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>{message}</p>
      </div>
    );
  }
}

export default EvenOddApp;
