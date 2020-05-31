import React from 'react'
import typeColors from '../../utils/typeColors'

import {  
  Container,
  Informations,
  Image,
  PokemonName,
  PokemonTypes,
  PokemonType,
} from './styles'

export default function Card({ pokemon }) {
  return (
    <Container>
      <Informations>
        <PokemonName>
          {pokemon.name}
        </PokemonName>

        <PokemonTypes>
          {
            pokemon.types.map(type => {
              return (
                <PokemonType style={{ backgroundColor: typeColors[type.type.name] }}>
                  {type.type.name}
                </PokemonType>
              )
            })
          }
        </PokemonTypes>
      </Informations>
      
      <Image source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}} />
    </Container>
  )
}