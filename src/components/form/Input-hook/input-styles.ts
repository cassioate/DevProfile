import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const ErrorInput = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.danger};
  margin-bottom: 16px;
`;
