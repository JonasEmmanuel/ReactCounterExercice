import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleChangeState(amount) {
    this.setState(prevState => ({ value: prevState.value + amount }));
  }

  render() {
    return (
      <div>
        {this.state.value > 0 && (
          //  <button onClick={() => this.handleChangeState(-1)}>-</button>
          <button
            onClick={() =>
              this.setState(prevState => ({ value: prevState.value - 1 }))
            }
          >
            -
          </button>
        )}
        <span>{this.state.value}</span>
        {this.state.value < 10 && (
          <button onClick={() => this.handleChangeState(+1)}>+</button>
        )}
      </div>
    );
  }
}

// range(3) => [0, 1, 2]
function range(size) {
  return Array.apply(null, Array(size)).map(function(x, i) {
    return i;
  });
}

class Counters extends React.Component {
  constructor() {
    super();
    this.state = { nbOfCounter: 3 };
  }

  addCounter() {
    this.setState(prevState => ({ nbOfcounter: prevState.nbOfCounter + 1 }));
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState(prevState => ({
              nbOfcounter: prevState.nbOfCounter + 1
            }));
          }}
        >
          Add counter
        </button>
        <br />
        <div>{range(this.state.nbOfCounter).map(() => <Counter />)}</div>
      </div>
    );
    //  return (
    //   <div>
    //     <button onClick={() => this.addCounter()}> Ajouter Counter </button>
    //    {range(this.state.nbOfCounter).map(() => <Counter />)}
    //   </div>
    // );
  }
}

ReactDOM.render(<Counters />, document.getElementById("app"));
