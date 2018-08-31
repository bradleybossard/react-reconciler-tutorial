import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const onClickHandler = () => {
      this.setState(state => {
        return {
          count: state.count + 1
        };
      });
    };
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={onClickHandler}>Increment</button>
      </div>
    );
  }
}


export default App;
