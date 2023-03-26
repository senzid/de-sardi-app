export const usePokemonList = (dependencies:string) => {
    // useEffect(()=> {
    //     const endpoind = apiPaths.ALLPOKEMON
    //     getApiDataByUrl(`${endpoind}?limit=${numberResults}&offset=${currentPage}`)
    //     .then(data=>pokemonDetails(data))
    //     .catch((err)=>setError(err))
    //     .finally(()=>setLoading(false))
    // },[numberResults,currentPage])

    // async function pokemonDetails (data:apiResponse) {
    //     const pokemonInfo = await Promise.all(
    //         data.results.map(async(pokemon:{name:string, url:string})=>{
    //             return await fetch(pokemon.url).then(response=>response.json())
    //         })
    //     )
    //     setPokemonData(pokemonInfo)
    // }
      
    
    return dependencies
}