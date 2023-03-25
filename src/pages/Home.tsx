import './Home.scss';
import { Pokedex } from '../features/pokedex/pokedex.index';

export function Home() {
  
    // console.log(pokemonData)
    return (
      <div className="Home">
        <Pokedex/>
      </div>
    );
  }