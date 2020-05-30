import styled from 'styled-components/native'
import { shade } from 'polished'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 50px;
`;

export const Header = styled.View`
 
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20;
  color: #737380;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 8px;
  border-width: 2px;
  border-color: ${shade(0.15, '#fff')};
  flex-direction: row;
  align-items: center;
`;

export const Listing = styled.ScrollView`
  margin-top: 32px;
`;

export const Card = styled.View`
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 45px;

  flex-direction: row;
  justify-content: space-around;
`;

export const Informations = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #41414d;
  font-weight: bold;
`;

export const Type = styled.Text`

`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: -70px;
`;