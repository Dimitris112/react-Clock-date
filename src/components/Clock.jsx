import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello peeps</h1>
        <h2>Today is {this.state.date.toLocaleDateString()}.</h2>
        <h3>And the time is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

export default Clock;
