import { PokemonList } from './pokemon-list/PokemonList';

export function Pokedex() {

    return (
      <>
        <img className="MainLogo" alt="logo" src="https://images.wikidexcdn.net/mwuploads/wikidex/4/4d/latest/20210608195447/Logo_de_Pok%C3%A9mon.svg"></img>
        <PokemonList />
      </>
    );
  }