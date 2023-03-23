
export interface IBasePokemonUrlInfo {
    name: string
    url: string
}

export interface IPokemonListProps {
    pokelist: IPokemon[]
    setPokelist: Function
    setNextPage: Function
    setPreviousPage: Function
    nextPage: string
    previousPage: string
    isLoading: boolean
    setIsLoading: Function
}

export interface IPokemon {
    id: number
    name: string
    order: number
    abilities: IAbilitiesList[]
    types: ITypesList[]
    sprites: IPokemonSpritesList
    moves: IMoves[]
}

export interface IMoves {
    move: {
        name: string
        url: string
    }
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
    types: ITypesList[]
    sprites: IPokemonSpritesList
    abilities: IAbilitiesList[]
    moves: IMoves[]
}

export interface IPokemonSpritesList {
    front_default: string
}

export interface IPokemonDetailModalInfo {
    primaryColor: string
    secondaryColor: string
    img: string
    name: string
    abilities: IAbilitiesList[]
    moves: IMoves[]
}
