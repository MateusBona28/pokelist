import axios from "axios";

const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000,
})

export default API;
