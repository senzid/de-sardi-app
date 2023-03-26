const baseUrl = process.env.REACT_APP_BASE_URL

/* GET METHOD */
export const getApiDataByEndpoint = async (endpoind:string) => {
    return await fetch(baseUrl+endpoind).then((res)=>res.json())
}

export const getApiDataByUrl = async (url:string) => {
    return await fetch(url).then((res)=>res.json())
}

