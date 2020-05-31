import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { getPokemon, getAllPokemon } from '../../services/pokemon'

import { View, ActivityIndicator } from 'react-native'

import {
  Container,
  Header,
  Title,
  Description,
  Input,
  Cards,
  Text,
} from './styles'

export default function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');

  const [prevUrl, setPrevUrl] = useState('');

  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('')

  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData)
  }

  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>
        <Description>
          Procure por seus Pokemons através de seu nome
        </Description>

        <Input
          placeholder="Search pokemons..."
          onChangeText={value => setSearchPokemon(value)}
          value={searchPokemon}
        />
      </Header>

      {loading ? 
        <View>
          <ActivityIndicator size="large" color="#E63F34" />
        </View> : (
        <Cards>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />
          })}
        </Cards>
      )}
    </Container>
  );
}
