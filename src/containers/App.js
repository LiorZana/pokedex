import React from 'react';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
            pokemons: [],
            allPokemons: [],
            searchfield: '',
            page: 0,
                };
};

// First fetch
async componentDidMount() {
      await this.fetchPokemons(false);
      await this.fetchPokemons(true);
}

fetchPokemons = async (fetchAll=Boolean) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${fetchAll? 893 : 20}`)
  const pokeurls = await response.json();
  const response2 = await Promise.all(pokeurls.results.map(url => {
    return fetch(url.url);
  }))
  const promises = response2.map(async resp => await resp.json());
  const data = await Promise.all(promises);
  fetchAll ?
  this.setState({ allPokemons : data })
  :
  this.setState({ pokemons : data })
  
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value });
}

getPokeByPage = (page=Number) => {
  this.setState({ page : page});
  return this.state.allPokemons.filter((poke, i) => i >= page*20 && i < (page+1)*20);
}



pageUp = async (up) => {
  if(up && this.state.page < 44){
    await this.setState({pokemons : this.getPokeByPage(this.state.page+1)
    });
  } else if (!up && this.state.page > 0) {
    await this.setState({pokemons : this.getPokeByPage(this.state.page-1)});
  }
  console.log(this.state.page);
}


  render() {
    const {pokemons, searchfield, allPokemons} = this.state;
    const filteredPokemons = ((this.state.allPokemons.length > 0 && this.state.searchfield.length > 0)
    ? 
    allPokemons : pokemons).filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    })


    return (
    <div className='app tc bg-red'>
    <h1 className='f1' style={{margin:0}}>Pokedex!</h1>
    <h3>Using the <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>PokeAPI</a></h3>
    <button onClick={() => {this.pageUp(false)}}>Previous page</button>
    <button onClick={() => {this.pageUp(true)}}>Next page</button>
    <p>Page: {this.state.page}</p>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <ErrorBoundry>
    <CardList pokemons={filteredPokemons}/>
    </ErrorBoundry>
    </Scroll>
    </div>)
  }
    
  
    
}

export default App;
