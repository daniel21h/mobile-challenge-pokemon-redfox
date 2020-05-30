import React, { useState, useEffect } from 'react'
import { 
  Container, 
  Header,
  Title,
  Description,
  Input,
  Listing,
  Card,
  Informations,
  Name,
  Type,
  PokemonImage,
} from './styles'

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([])
  const [searchPokemon, seSearchPokemon] = useState('')

  async function loadPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=964')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results))
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>
        <Description>
          Procure por seus Pokemons através de seu nome
        </Description>

        <Input
          placeholder="Search pokemons..."
        />
      </Header>

      <Listing showsVerticalScrollIndicator={false}>
        {pokemons.filter(
          pokemon => pokemon.name.toLowerCase()
            .includes(searchPokemon.toLocaleLowerCase())
        ).map((pokemon, index) => {
          return (
            <Card key={index}>
              <Informations>
                <Name>{pokemon.name}</Name>
                <Type></Type>
              </Informations>

              <PokemonImage 
                source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}} 
              />
            </Card>
          )
        })}
      </Listing>
    </Container>
  )
}