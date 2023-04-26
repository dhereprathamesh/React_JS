import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        const {count} = this.state
        this.setState({count: count + 1});

    };
    
    resetCount = () => {
        this.setState({count: 0});

    };

  render() {
    const { count } = this.state

    return (
      <div>
        <div>
            count = { count }
        </div>
        <button type="" onClick={this.handleCount}>click</button>
        <button type=""onClick={this.resetCount}>reset</button>

      </div>
    )
  }
}

export default Counter
