import React from 'react';
import './Card.css'

const Card = ({name, type, id}) => {
    
    const types = [].concat(type);
    let typeClass =   types.map(type => {
        return type.type.name;
    })

    const typeArray = types.map((type, i) => <div key={i} className={'type ' + typeClass[i]}>{type.type.name}</div>);

    const idZeros = (id) => {
        if (id < 10){
            return [0, 0];
        } else if (id < 100) {
            return 0;
        }   else {
            return;
        }
    }
    return (
        <div id='Card' className='tc bg-washed-yellow br3 pa3 ma2 bw2 shadow-5'>
            <img alt={name} src={id <= 721 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${id}.png`}></img>   
                        <h2 className='name' style={{textTransform: "capitalize"}}>{name}</h2>
            <div>
                #{[idZeros(id), id]}
                <br></br>
                {typeArray}
            </div>
            

        </div>
    )
}

export default Card;