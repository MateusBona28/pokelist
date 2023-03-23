
export interface IBasePokemonUrlInfo {
    name: string
    url: string
}

export interface IPokemon {
    id: number
    name: string
    order: number
    abilities: IAbilitiesList
    types: ITypesList
}

export interface IAbilitiesList {
    ability: IAbilities
    is_hidden: boolean
    slot: number
}

export interface IAbilities {
    name: string
    url: string
}

export interface ITypesList {
    slot: number
    type: ITypes
}

export interface ITypes {
    name: string
    url: string
}

export interface IPokemonCardProps {
    id: number
    name: string
    types: ITypesList
}
