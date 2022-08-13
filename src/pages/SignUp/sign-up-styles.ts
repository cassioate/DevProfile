import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

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

export const Logo = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 64px;
`;

export const Icon = styled(Feather as any)`
  font-size: 20px;
  color: ${theme.colors.primary};
`;

export const ReturnButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${theme.colors.gray800};
  border-color: ${theme.colors.black};
  border-top-width: 1px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ReturnButtonText = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  font-size: 18px;
  margin-left: 16px;
`;
