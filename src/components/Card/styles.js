import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 50px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Informations = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: -80px;
`;

export const PokemonName = styled.Text`
  font-size: 20px;
  color: #41414d;
  font-weight: bold;
`;

export const PokemonTypes = styled.View`
  justify-content: center;
`;

export const PokemonType = styled.Text`
  padding: 5px 10px;
  margin: 10px 10px 0 0;
  border-radius: 5px;
  background: #1495cc;
  color: #fff;
`;

