import React, { Component } from "react";
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.startClock()
    this.state = { currentTime: new Date().toLocaleString() };
  }

  startClock = () => {
    setInterval(() => {
      console.log("Updating Time");
      this.setState({ currentTime: new Date().toLocaleString() });
    }, 1000);
  };

  render() {
    console.log("Rendering Clock");
    return (
    <div>
        <AnalogClock />
        <DigitalClock time={this.state.currentTime} />
    </div>
    );
  }
}

export default Clock;
