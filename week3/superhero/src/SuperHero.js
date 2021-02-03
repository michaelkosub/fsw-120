import React from "react"
import SuperHeroData from "./SuperHeroData.json"
import SuperHeroList from "./SuperHeroList"



class SuperHero extends React.Component{

    constructor(){
        super()
        this.state= {
            superHeroData: SuperHeroData
        }
    }

    handleOnClick = (c)=>{
        alert(c)
    } 
     
    render(){        
        return(
            <div>  
                              
                {console.log(this.state.superHeroData)}                
                <SuperHeroList theData = {this.state.superHeroData} 
                handleOnClick = {this.handleOnClick}
                />
            </div>
        )
    }
}

export default SuperHero