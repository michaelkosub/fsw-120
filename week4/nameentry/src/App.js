import React from "react"
import './App.css';
import Name from "./Name.js"


class Box extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            fullName: "",
            list: []
        }
       
    }
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    nameApp = () => {
        this.setState({
            fullName: this.state.firstName + " " + this.state.lastName,
            list: this.state.list.concat(this.state.fullName)
        })
        {<h1>{this.state.list}</h1>}
        console.log(this.state.fullName)
    }
    
    render() {
        return (
            <form id = "name">
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                <br></br>
                <br></br>
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
    
                <h1> {this.state.firstName}  {this.state.lastName}</h1> 
               
                <button type="button" onClick={ this.nameApp}>SUBMIT</button>

                <Name one= {this.state.list}/>

               
            </form>
        )
    }
}

export default Box


