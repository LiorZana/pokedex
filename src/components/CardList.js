import React from 'react';
import Card from './Card'
import './CardList.css'

const CardList = ({pokemons}) => {
return (
<div className='CardList bg-gold'>
{   pokemons.filter(pokemon => pokemon.id <= 893).map((pokemon, i) => {
       return <Card 
                        key={i}
                        name={pokemon.name}
                        id={pokemon.id}
                        type={pokemon.types}
                        />;
                       
                        
                        
})}
</div>
)
};

export default CardList;