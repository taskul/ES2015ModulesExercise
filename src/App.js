import logo from './logo.svg';
import './App.css';
import pokedata from "./pokemonData";
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokeData={pokedata} />
    </div>
  );
}

export default App;
