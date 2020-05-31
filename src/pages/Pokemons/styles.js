import styled from 'styled-components/native'
import { shade } from 'polished'

export const Container = styled.ScrollView`
  padding: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
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
  line-height: 20px;
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

export const Text = styled.Text``;

export const Cards = styled.View``;