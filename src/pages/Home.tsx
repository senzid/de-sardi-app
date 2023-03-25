import './Home.scss';
import { Pokedex } from '../features/pokedex/pokedex.index';

export function Home() {
  
  return (
    <div className="Home">
      <Pokedex/>
    </div>
  );
}