import React from 'react';
import Card from './Card'

const CardList = ({pokemons}) => {
return (
<div className='bg-gold'>
{   pokemons.filter(pokemon => pokemon.id <= 893).map((pokemon, i) => {
       return <Card 
                        key={i}
                        name={pokemon.name}
                        id={pokemon.id}
                        type={pokemon.name}
                        />;
                       
                        
                        
})}
</div>
)
};

export default CardList;