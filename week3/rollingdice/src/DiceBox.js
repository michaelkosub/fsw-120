import React from "react";

class DiceBox extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      real1: "true",
      num2: 0,
      real2: "true",
      num3: 0,
      real3: "true",
      num4: 0,
      real4: "true",
      num5: 0,
      real5: "true",
    };
  }
  handleClick = () => {
    if (this.state.real1 === "true") {
      this.setState({
        num1: Math.floor(Math.random() * 6),
      });
    }
    if (this.state.real2 === "true") {
      this.setState({
        num2: Math.floor(Math.random() * 6),
      });
    }
    if (this.state.real3 === "true") {
        this.setState({
          num3: Math.floor(Math.random() * 6),
        });
      }
      if (this.state.real4 === "true") {
        this.setState({
          num4: Math.floor(Math.random() * 6),
        });
      }
      if (this.state.real5 === "true") {
        this.setState({
          num5: Math.floor(Math.random() * 6),
        });
      }

    this.setState({
    
    
    });
  };

  singleDie1 = () => {
    if (this.state.real1 === "true") {
      this.setState({
        real1: "false",
      });
    }
  };
  singleDie2 = () => {
    if (this.state.real2 === "true") {
      this.setState({
        real2: "false",
      });
    }
  };
  singleDie3 = () => {
    if (this.state.real3 === "true") {
      this.setState({
        real3: "false",
      });
    }
  };
  singleDie4 = () => {
    if (this.state.real4 === "true") {
      this.setState({
        real4: "false",
      });
    }
  };
  singleDie5 = () => {
    if (this.state.real5 === "true") {
      this.setState({
        real5: "false",
      });
    }
  };
  render() {
    return (
      <div>
        <h1 onClick={this.singleDie1} className="box">{this.state.num1}</h1>
        <br></br>
        <h1 onClick={this.singleDie2} className="box">{this.state.num2}</h1>
        <br></br>
        <h1 onClick={this.singleDie3} className="box">{this.state.num3}</h1>
        <br></br>
        <h1 onClick={this.singleDie4} className="box">{this.state.num4}</h1>
        <br></br>
        <h1 onClick={this.singleDie5} className="box">{this.state.num5}</h1>
        <br></br>

        <button onClick={this.handleClick}>ROLL!</button>
      </div>
    );
  }
}
export default DiceBox;
