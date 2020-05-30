import React from 'react'
import { 
  Container, 
  Header,
  Title,
  Description,
  Input,
} from './styles'

export default function Pokemons() {
  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>
        <Description>Procure por seus Pokemons através de seu nome</Description>

        <Input
          placeholder="Search pokemons..."
        />
      </Header>
    </Container>
  )
}