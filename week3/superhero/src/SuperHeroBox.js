import React from "react"


const SuperHeroCard = ({index, name, show, catchPhrase, imageName, handleOnClick})=>{    
    return(
        <div className="superhero-card" onClick = {() => handleOnClick(catchPhrase)}>
            <div className="superhero-info">
                <h1>{name}</h1>
                <h2>{show}</h2>
            </div>            
            <img  className= "superhero-img" src = {imageName} alt = {`${name} `} />
        </div>
    )  
}
export default SuperHeroCard
