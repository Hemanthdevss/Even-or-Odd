import React, { Component } from "react";
import "./index.css";

class EvenOddApp extends Component {
  state = {
    count: 0,
    isEven: true,
  };

  handleIncrement = () => {
      const randomValue = Math.floor(Math.random() * 101); // Generate random number between 0 to 100
      


    this.setState((prevState) => (
      { 
        count: randomValue + prevState.count ,
        isEven: (randomValue + prevState.count) % 2 === 0
      }
    ))
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
      <div className="bg_container">
        <h1 className="headingStyle">Count {count}</h1>
        <p className="headingStyle">{message}</p>
        <button onClick={this.handleIncrement} className="headingStyle">Increment</button>
        <p> Increase by random number</p>
      </div>
    );
  }
}

export default EvenOddApp;
