import { useState,useEffect } from "react"
import { pokemonResponse } from "./types"


interface apiResponse {
    count:number
    next?:string,
    previous?:string
    results: Array<any>
}

export const useFetch = () => {
    
    const [pokemonData,setPokemonData] = useState<pokemonResponse[]>()
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [numberResults,setNumberResults] = useState(10);
    const [currentPage,setCurrentPage] = useState(0);
    

    useEffect(()=> {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberResults}&offset=${currentPage}`) //limit=nombre resultats i offset pokemon que comenca
        .then(response=>response.json())
        .then(data=>pokemonDetails(data))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
    },[numberResults,currentPage])

    async function pokemonDetails (data:apiResponse) {
        const pokemonInfo = await Promise.all(
            data.results.map(async(pokemon:{name:string, url:string})=>{
                return await fetch(pokemon.url).then(response=>response.json())
            })
        )
        setPokemonData(pokemonInfo)
    }
      
    
    return {pokemonData,loading,error,numberResults,setNumberResults,currentPage,setCurrentPage}
}
