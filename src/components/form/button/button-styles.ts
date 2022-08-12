import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  background: ${theme.colors.primary};
  color: ${theme.colors.primaryLight};
  align-items: center;
  width: 50%;
  border-radius: 25px;
  padding: 18px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.dark};
`;
