import React from "react";



class Colors extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }
     handleOnClick = () => {
         let newColor = this.state.colors
        if(newColor[0] === "white"){
            for(let i = 0; i < newColor.length; i++){
                newColor[i] = "black"
            } 
        }else if (newColor[0] === "black"){
            for(let i = 0; i < newColor.length; i++){
                newColor[i] = "white"
            }             
        }else{
            for(let i = 0; i < newColor.length; i++){
                newColor[i] = "white"
            } 
        }
        this.setState(
            {
                colors: newColor
            })
     }
     handlePurple = () => {
        let newColor = this.state.colors
        
            for(let i = 0; i < 2; i++){
                newColor[i] = "purple"             
        }          
        
        this.setState(
            {
                colors: newColor
            })
     }
     handleBottom = (i, color) =>{
        let newColor = this.state.colors
           newColor[i] = color     
          
         this.setState(
        {
            colors: newColor
        })

     }
     colorGen = () => {
    let newColor = Math.floor(Math.random()* 16777215).toString(16)
    return "#"+newColor
  }     
    render(){        
        const colorMap = this.state.colors.map(color => {
            return(
                <div className="colored-squares">
                    <Squares colors = {color}/>                    
                </div>
            )
        })
        return(            
            <div className = "squares">
                <h2>Welcome to the Ultimate DJ. Please choose your colors!</h2>
                {colorMap}
                <div className="button-r1">
                    <button onClick = {this.handleOnClick}>B/W</button>
                    <button onClick = {this.handlePurple}>Purple</button>
                    <button onClick = {()=>{this.handleBottom(2, "blue")}}>Blue</button>
                    <button onClick = {()=>{this.handleBottom(3, "blue")}}>Blue</button>
                </div>
                <div className="button-r2">                
                    <button onClick = {()=>{this.handleBottom(0, this.colorGen())}}>Top/L</button>
                    <button onClick = {()=>{this.handleBottom(1, this.colorGen())}}>Top/R</button>
                    <button onClick = {()=>{this.handleBottom(2, "maroon")}}>Bottom/L</button>
                    <button onClick = {()=>{this.handleBottom(3, "aqua")}}>Bottom/R</button>
                </div>                
            </div>
        )
    }
}

export default Colors