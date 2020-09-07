import React from 'react';

const Card = ({name, type, id}) => {
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
        <div className='tc bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={name} src={id <= 721 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${id}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${id}.png`}></img>
            <h2 style={{textTransform: "capitalize"}}>Name: {name}</h2>
            <p>
                Id:#{[idZeros(id), id]}
                <br></br>
                Type/s: {type}
            </p>

        </div>
    )
}

export default Card;