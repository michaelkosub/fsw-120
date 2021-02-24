import React from "react";
import "./App.css"


class Cal extends React.Component {
    constructor() {
      super();
      this.state = {
        num1: "",
        num2: "",
        calculation: "",
      };
    }
  
    handleClick = (e) => {
      this.setState({
        calculation: e.target.id,
      });
    };
  
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: Number(value),
      });
    };
  
    calculate = () => {
      let number1 = this.state.num1;
      let number2 = this.state.num2;
      if (this.state.calculation === "add") {
        return ` ${number1} + ${number2} = ${number1 + number2}`;
      } else if (this.state.calculation === "sub") {
        return ` ${number1} - ${number2} = ${number1 - number2}`;
      } else if (this.state.calculation === "mul") {
        return ` ${number1} * ${number2} = ${number1 * number2}`;
      } else if (this.state.calculation === "div") {
        return ` ${number1} / ${number2} = ${number1 / number2}`;
      }
    };

    clearState = () => {
        this.setState({
            num1:"",
            num2:""
        })
    }
  
    render() {
      return (
        <div id="calc">
          <input
            className="number"
            id="num1"
            name="num1"
            value={this.state.num1}
            type="number"
            onChange={this.handleChange}
            placeholder="Number1"
            required
          />
          <input
            className="number"
            id="num2"
            name="num2"
            type="number"
            value={this.state.num2}
            onChange={this.handleChange}
            placeholder="Number2"
            required
          />
          <div id="buttonC">
            <button className="button" id="add" onClick={this.handleClick}>
              +
            </button>
            <button className="button" id="sub" onClick={this.handleClick}>
              -
            </button>
            <button className="button" id="mul" onClick={this.handleClick}>
              x
            </button>
            <button className="button" id="div" onClick={this.handleClick}>
              /
            </button>
            <button className="button" id="clear" onClick={(w) => {this.handleClick(w); this.clearState(w) }}>
                
                C
            </button>
          </div>
          <p id="calculation">
            {this.state.calculation === "add" ||
            this.state.calculation === "sub" ||
            this.state.calculation === "mul" ||
            this.state.calculation === "div"
              ? this.calculate()
              : console.log("error")}
          </p>
        </div>
      );
    }
  }
  export default Cal;