import {
  Character,
  CharacterDetails,
  PaginatedResponse,
  Planet,
  PlanetDetails,
} from "../types/api";

const BASE_URL = "https://dragonball-api.com/api";

async function request<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error("Não foi possível consultar a API.");
  }

  return response.json() as Promise<T>;
}

export async function getCharacters(): Promise<Character[]> {
  const data = await request<PaginatedResponse<Character>>("/characters?limit=58");
  return data.items;
}

export function getCharacter(id: number) {
  return request<CharacterDetails>(`/characters/${id}`);
}

export async function getPlanets(): Promise<Planet[]> {
  const data = await request<PaginatedResponse<Planet>>("/planets?limit=20");
  return data.items;
}

export function getPlanet(id: number) {
  return request<PlanetDetails>(`/planets/${id}`);
}
