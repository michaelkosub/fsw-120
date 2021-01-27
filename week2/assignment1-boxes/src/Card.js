import React from "react"
import "./App"



function Card(props){
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return(
        <div style={styles}>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>{props.info}</p>
        </div>
    )
}



export default Card