import { pokemonResponse } from '../../../types';
import './PokemonDetail.scss';
import { PokeTable } from '../../ui-components/PokeTable';

interface Props<TElement> {
    pokemonData?: pokemonResponse | undefined;
  }

export const PokemonDetail =<TElement extends unknown>({
    pokemonData
  }: Props<TElement>) => {
    const height=pokemonData?.height
    const weight=pokemonData?.weight
    const frontImg=pokemonData?.sprites.front_default
    const backImg=pokemonData?.sprites.back_default
    const types = pokemonData?.types.map((type)=><p key={pokemonData.name+type.type.name} className={`${type.type.name}`}>{type.type.name}</p>)
    const abilities = pokemonData?.abilities.map((ability)=><span key={pokemonData.name+ability.ability.name}>&nbsp;{ability.ability.name} |</span>)

    const columnsMoves=[{
      title:'name',
      renderItem:(item:any)=>item.move.name
    },
    {
      title:'level earned',
      renderItem:(item:any)=>item.version_group_details[0].level_learned_at
    }]

    const columsStats=[{
      title:'name',
      renderItem:(item:any)=>item.stat.name
    },
    {
      title:'base stat',
      renderItem:(item:any)=>item.base_stat
    }]

  return (
    <div className='container'>

      <div className='title'>
        <h2>{pokemonData?.name}</h2>
        <div className='types-container'>{types}</div>
      </div>
      <div className='image'>
        <img alt={`front sprite of ${pokemonData?.name}`} height="150px" src={frontImg}></img>
        <img alt={`front sprite of ${pokemonData?.name}`} height="150px" src={backImg}></img>
      </div>
      <div className='details'>
        <p><span>Height:</span> {height && height/10}m</p>
        <p><span>Weight:</span> {weight && weight/10}kg</p>
        <p><span>Base experience:</span> {pokemonData?.base_experience}</p>
        <p><span>Abilities:</span> {abilities}</p>
        <p><span>Stats:</span></p>
        <div className='stats-table'>
          <PokeTable loading={false} columnRender={columsStats} dataSource={pokemonData?.stats} keyExtractor={(item)=>item.stat.name} />
        </div>
      </div>
      <div className='movements'>
        <p><span>Moves:</span></p>
        <div className='movements-table'>
          <PokeTable loading={false} columnRender={columnsMoves} dataSource={pokemonData?.moves} keyExtractor={(item)=>item.move.name} />
        </div>
      </div>
    </div>
  )
}