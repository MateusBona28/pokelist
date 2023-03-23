import { ITypesList } from "../interfaces/pokeapi.interfaces";

export const pokemonTypeColor = async (types: ITypesList[], setPrimaryColor: Function, setSecondaryColor: Function) => {
    if (types[0].type.name === "fire") {
        setPrimaryColor("--firePrimaryColor");
        setSecondaryColor("--fireSecondaryColor");
    }

    else if(types[0].type.name === "grass" || types[0].type.name === "leaf" || types[0].type.name === "bug") {
        setPrimaryColor("--leafPrimaryColor");
        setSecondaryColor("--leafSecondaryColor");
    }

    else if(types[0].type.name === "water" || types[0].type.name === "ice") {
        setPrimaryColor("--waterPrimaryColor");
        setSecondaryColor("--waterSecondaryColor");
    }

    else if(types[0].type.name === "electric") {
        setPrimaryColor("--lightningPrimaryColor");
        setSecondaryColor("--lightningSecondaryColor");
    }

    else if(types[0].type.name === "rock" || types[0].type.name === "fighting") {
        setPrimaryColor("--rockPrimaryColor");
        setSecondaryColor("--rockSecondaryColor");
    }

    else if(types[0].type.name === "psychic" || types[0].type.name === "psychic") {
        setPrimaryColor("--psychicPrimaryColor");
        setSecondaryColor("--psychicSecondaryColor");
    }

    else {
        setPrimaryColor("--defaultPrimaryColor");
        setSecondaryColor("--defaultSecondaryColor");
    }
}