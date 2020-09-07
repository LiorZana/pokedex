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
            searchfield: '',
            page: 0,
                };
};
async componentDidMount() {
      await this.fetchPokemons(0);
}

fetchPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.page*20}&limit=20`)
  const pokeurls = await response.json();
  const response2 = await Promise.all(pokeurls.results.map(url => {
    return fetch(url.url);
  }))
  const promises = response2.map(async resp => await resp.json())
  const data = await Promise.all(promises)
  this.setState({ pokemons: data });
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value });
}

pageUp = async (up) => {
  if(up && this.state.page < 44){
    await this.setState({page: this.state.page+1})
  } else if (!up && this.state.page !== 0) {
    await this.setState({page: this.state.page-1})
  }

  await this.fetchPokemons();
  console.log(this.state.pokemons)
}

  render() {
    let {pokemons, searchfield} = this.state;

    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  })
    return (
    <div className='app tc bg-red'>
    <h1 className='f1' style={{margin:0}}>Pokedex!</h1>
    <h3>Using the <a href='https://pokeapi.co/' target='_blank'>PokeAPI</a></h3>
    <button onClick={() => {this.pageUp(false)}}>Page down</button>
    <button onClick={() => {this.pageUp(true)}}>Page up</button>
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
