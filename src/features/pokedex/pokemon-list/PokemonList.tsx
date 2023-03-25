import { useFetch } from '../../../useFetch';
import {PokeTable} from '../../ui-components/PokeTable';
import { PokeButton } from '../../ui-components/PokeButton';
import {PokeModal} from '../../ui-components/PokeModal'
import useModal from '../../../useModal';
import { PokemonDetail } from '../pokemon-detail/PokemonDetail';

export function PokemonList() {
  
    const {pokemonData,loading,error,numberResults,setNumberResults,currentPage,setCurrentPage} = useFetch();
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
      renderItem:(item:any)=><img alt={`front sprite of ${item.name}`} height="40px" src={item.sprites.front_default}></img>
    },
    {
      title:'details',
      renderItem:(item:any)=> <PokeButton className="outlined" color="gray" onClick={()=>openDetails(item)} >+</PokeButton>
    },]
  
    const resultsFilter = [5,10,15].map((val)=><PokeButton style={{marginRight:'5px'}}className="outlined" color="black" onClick={()=>setNumberResults(val)} key={`filter_${val}`}>{val}</PokeButton>)
  
    const custPagination = {
      currentPage : Math.ceil(currentPage/numberResults+1),
      numberResults: numberResults,
      onNext: ()=>{setCurrentPage(currentPage+numberResults)},
      onBack: ()=>{setCurrentPage(currentPage-numberResults)},
      filters:resultsFilter,
      total: Math.ceil(1010/numberResults)
    }

    return (
      <>
        <PokeTable 
          loading={loading}
          columnRender={columns}
          dataSource={pokemonData}
          keyExtractor={(item)=>item.id}
          pagination={custPagination}
        />
        <PokeModal isOpen={isOpen} toggle={toggle}>
          <PokemonDetail pokemonData={idContent}/>
        </PokeModal>
      </>
    );
  }