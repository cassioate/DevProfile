import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.dark};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.light};
  margin-bottom: 24px;
`;
