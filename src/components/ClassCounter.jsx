import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decremant = this.decremant.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decremant() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decremant}>Decremant</button>
      </div>
    );
  }
}

export default ClassCounter;
