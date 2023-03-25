import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useFetch } from '../../useFetch';
import {CustomTable} from '../ui-components/CustomTable';
import { CustButton } from '../ui-components/CustButton';
import { Table, Button, Modal } from '@senzid/de-sardi-lib';
import {CustModal} from '../ui-components/CustModal'
import useModal from '../../useModal';
import { PokemonDetail } from './pokemon-detail/PokemonDetail';

export function Pokedex() {
  
    const {pokemonData,loading,error,numberResults,setNumberResults,currentPage,setCurrentPage} = useFetch();
    const { isOpen, toggle,idContent,handleContent } = useModal();
  
    const openDetails = (id:any) => {
      toggle();
      handleContent(id)
    }
  
    const modalContent = () => {
      console.log(idContent)
      return (
        <h2>{idContent && idContent?.name}</h2>
      )
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
      renderItem:(item:any)=> <Button className="outlined" color="gray" onClick={()=>openDetails(item)} >+</Button>
    },]
  
    const resultsFilter = [5,10,15].map((val)=><Button style={{marginRight:'5px'}}className="outlined" color="black" onClick={()=>setNumberResults(val)} key={`filter_${val}`}>{val}</Button>)
  
    const custPagination = {
      currentPage : Math.ceil(currentPage/numberResults+1),
      numberResults: numberResults,
      onNext: ()=>{setCurrentPage(currentPage+numberResults)},
      onBack: ()=>{setCurrentPage(currentPage-numberResults)},
      filters:resultsFilter,
      total: Math.ceil(1010/numberResults)
    }
    // console.log(pokemonData)
    return (
      <>


        <img className="MainLogo" alt="logo" src="https://images.wikidexcdn.net/mwuploads/wikidex/4/4d/latest/20210608195447/Logo_de_Pok%C3%A9mon.svg"></img>
          {/* <Button label ={`${process.env.REACT_APP_API_URL}`}></Button> */}
          {/* <Table title ="hola" tcell1='hola2' tcell2='hey'></Table> */}
        {/* <Table loading={loading} columnRender={columns} dataSource={pokemonData} keyExtractor={(item)=>item.id} pagination={custPagination} /> */}
        <Table 
          loading={loading}
          columnRender={columns}
          dataSource={pokemonData}
          keyExtractor={(item)=>item.id}
          pagination={custPagination} />
        <Modal isOpen={isOpen} toggle={toggle}>
            <PokemonDetail pokemonData={idContent}/>
        </Modal>
      </>
    );
  }