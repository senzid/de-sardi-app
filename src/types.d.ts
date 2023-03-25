export interface pokemonResponse {
    abilities: Array<{ability:{name:string}}>,
    base_experience:number,
    forms: Array<{name:string}>,
    games_indices: Array<{name:string}>,
    height:number,
    held_items: Array<{name:string}>,
    id:number,
    is_default:boolean,
    location_area_encounters:string,
    moves: Array<{move:{name:string},version_group_details:Array<>}>,
    name:string,
    order:number,
    past_types: Array<{name:string}>,
    species: Array<{name:string}>,
    sprites: {front_default:string,back_default:string},
    stats: Array<{stat:{name:string},base_stat:string}>,
    types: Array<{type:{name:string}}>
    weight:number
}