import React, {Component} from "react";
import "./Card.css"





class Card extends Component{

    // static defaultProps = data;
   
   
    render(){
       
        return(
            <div className="Card">
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png `}/> 
             <div className="Card-info">
             {this.props.name} {this.props.type} {this.props.base_experience}

             </div>

            </div>

        )
    }
}

export default Card;