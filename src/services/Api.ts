import axios from "axios";

export const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
})

export const NOURLAPIREQUEST = axios.create({
  baseURL: "",
  timeout: 10000,
})
