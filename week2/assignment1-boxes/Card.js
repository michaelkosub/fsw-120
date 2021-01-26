import React from "react"



function Card(props){
    const style = {
        backgroundColor: props.cardColor,
        hight: props.hight,
        width: props.width
    }

    return(
        <div style={styles}></div>
    )
}

Card.defaultProps = {
    cardColor: "purple",
    heigh: 80,
    width: 100
}


export default Card