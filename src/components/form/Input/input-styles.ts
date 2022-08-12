import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../global/styles/theme';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  background: ${theme.colors.gray800};
  color: ${theme.colors.light};
  border-radius: 15px;
  margin-bottom: 5px;
  font-size: 18px;
  font-family: ${theme.fonts.regular};
`;
