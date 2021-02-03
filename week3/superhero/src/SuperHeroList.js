import React from "react"
import SuperHeroBox from "./SuperHeroBox"


class SuperHeroList extends React.Component {    

    render(){
        const mappedSuperHeros = this.props.theData.map((hero,i) => {
            return(
                <SuperHeroBox
                    key ={i}
                    index = {i}
                    name = {hero.name}
                    show = {hero.show}
                    catchPhrase = {hero.catchPhrase}
                    imageName = {hero.imageName}
                    handleOnClick = {this.props.handleOnClick}
                />
            )
        })
        return (
            <div>
                {mappedSuperHeros}
            </div>
        )
    }
}

export default SuperHeroList