import React,{Component} from "react";
const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
class Card extends Component{
    render(){
        let imgSource = `${PokeAPI}${this.props.id}.png`
        return (
        <div>
            <h1>{this.props.name}</h1>
            <img src={imgSource}/>

        </div>    
        
        )
    }
}

export default Card