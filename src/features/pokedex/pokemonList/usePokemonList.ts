import { useState,useEffect } from "react"
import {getApiDataByUrl,getApiDataByEndpoint} from "../../../services/api"
import { pokemonResponse } from "../../../types"
import apiPaths from "../../../services/apiPaths"


interface apiResponse {
    count:number
    next?:string,
    previous?:string
    results: Array<any>
}

export const usePokemonList = () => {
    
    const [pokemonData,setPokemonData] = useState<pokemonResponse[]>()
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [numberResults,setNumberResults] = useState(10);
    const [currentPage,setCurrentPage] = useState(0);
    
    useEffect(()=> {
        const endpoind = apiPaths.ALLPOKEMON
        getApiDataByEndpoint(`${endpoind}?limit=${numberResults}&offset=${currentPage}`)
        .then(data=>pokemonDetails(data))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
    },[numberResults,currentPage])

    async function pokemonDetails (data:apiResponse) {
        const pokemonInfo = await Promise.all(
            data.results.map(async(pokemon:{name:string, url:string})=>{
                return await getApiDataByUrl(pokemon.url)
            })
        )
        setPokemonData(pokemonInfo)
    }
      
    
    return {pokemonData,loading,error,numberResults,setNumberResults,currentPage,setCurrentPage}
}
