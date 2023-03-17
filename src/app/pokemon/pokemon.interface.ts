export interface Result {
    name: string
    url: string
    image?: string
}

export interface Pokemon {
    count: number
    next: string
    previous: null
    results: Result[]
}

export interface Sprites {
    front_default: string;
}

export interface PokemonSingle {
    id: number;
    name: string;
    order: number;
    sprites: Sprites;
}