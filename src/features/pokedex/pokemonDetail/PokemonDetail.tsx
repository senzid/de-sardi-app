import { pokemonResponse } from '../../../types';
import './PokemonDetail.scss';
import { PokeTable } from '../../ui-components/table/PokeTable';

interface Props {
    pokemonData?: pokemonResponse | undefined;
  }

export const PokemonDetail = ({
    pokemonData
  }: Props) => {
    const height=pokemonData?.height
    const weight=pokemonData?.weight
    const frontImg=pokemonData?.sprites.front_default
    const backImg=pokemonData?.sprites.back_default
    const types = pokemonData?.types.map((type)=><p key={pokemonData.name+type.type.name} className={`${type.type.name}`}>{type.type.name}</p>)
    const abilities = pokemonData?.abilities.map((ability)=><span key={pokemonData.name+ability.ability.name}>&nbsp;{ability.ability.name} |</span>)
    const mainType = types && types[0].props.className

    const columnsMoves=[{
      title:'attack',
      renderItem:(item:any)=>item.move.name
    },
    {
      title:'level learned',
      renderItem:(item:any)=>item.version_group_details[0].level_learned_at
    }]

    const columsStats=[{
      title:'stat',
      renderItem:(item:any)=>item.stat.name
    },
    {
      title:'base value',
      renderItem:(item:any)=>item.base_stat
    }]

    const altImgfront = () => frontImg?`back sprite of ${pokemonData?.name}`:`${pokemonData?.name} front not available`
    const altImgBack = () => backImg?`back sprite of ${pokemonData?.name}`:`${pokemonData?.name} back not available`

  return (
    <div className='container'>
      <div className='sub-container left-container'>
        <div className='title'>
          <h2>{pokemonData?.name}</h2>
          <div className='types-container'>{types}</div>
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
      </div>

      <div className='sub-container right-container'>
        <div style={{backgroundColor:'transparent',borderRadius:'10px'}} className={`image ${mainType}`}>
          <img alt={altImgfront()} height="150px" src={frontImg}></img>
          <img alt={altImgBack()} height="150px" src={backImg}></img>
        </div>
        <div className='movements'>
          <p><span>Moves:</span></p>
          <div className='movements-table'>
            <PokeTable loading={false} columnRender={columnsMoves} dataSource={pokemonData?.moves} keyExtractor={(item)=>item.move.name} />
          </div>
        </div>
      </div>
      
      


    </div>
  )
}