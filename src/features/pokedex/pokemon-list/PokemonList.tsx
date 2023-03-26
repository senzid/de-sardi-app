import { usePokemonList } from './usePokemonList';
import {PokeTable} from '../../ui-components/table/PokeTable';
import { PokeButton } from '../../ui-components/button/PokeButton';
import {PokeModal} from '../../ui-components/modal/PokeModal'
import useModal from '../../ui-components/modal/useModal';
import { PokemonDetail } from '../pokemon-detail/PokemonDetail';

export function PokemonList() {
  
    const {pokemonData,loading,error,numberResults,setNumberResults,currentPage,setCurrentPage} = usePokemonList();
    const { isOpen, toggle,idContent,handleContent } = useModal();
  
    const openDetails = (id:any) => {
      toggle();
      handleContent(id)
    }
  
    const columns=[{
      title:'id',
      renderItem:(item:any)=>item.id
    },
    {
      title:'name',
      renderItem:(item:any)=>item.name
    },
    {
      title:'sprite',
      renderItem:(item:any)=><img alt={item.sprites.front_default?`front sprite of ${item.name}`:`${item.name} don't have image yet`} height="40px" src={item.sprites.front_default}></img>
    },
    {
      title:'details',
      renderItem:(item:any)=> <PokeButton className="outlined" color="gray" onClick={()=>openDetails(item)} >+</PokeButton>
    },]
  
    const resultsFilter = [5,10].map((val)=><PokeButton style={{marginRight:'5px'}} className="outlined" color="black" onClick={()=>setNumberResults(val)} key={`filter_${val}`}>{val}</PokeButton>)

    const extremsFilter = [0,1000].map((val)=><PokeButton style={{marginRight:'5px',backgroundColor:"lightgray"}} className="outlined" color='black' onClick={()=>setCurrentPage(val)} key={`extrem_${val}`}>{val===0?'first':'last'}</PokeButton>)
  
    const custPagination = {
      currentPage : Math.ceil(currentPage/numberResults+1),
      numberResults: numberResults,
      onNext: ()=>{setCurrentPage(currentPage+numberResults)},
      onBack: ()=>{setCurrentPage(currentPage-numberResults)},
      filters:resultsFilter.concat(extremsFilter),
      total: Math.ceil(1010/numberResults)
    }

    return (
      <>
        {error ? 
          <div className='error'> There ara an error. Try again later. </div>
          :
        <PokeTable 
        loading={loading}
        columnRender={columns}
        dataSource={pokemonData}
        keyExtractor={(item)=>item.id}
        pagination={custPagination}
        />
      }
        <PokeModal isOpen={isOpen} toggle={toggle}>
          <PokemonDetail pokemonData={idContent}/>
        </PokeModal>
      </>
    );
  }