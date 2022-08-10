import styled from "styled-components/native";
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.black};
`;

export const Header = styled.View`
  width: 100%;
  height: 15%;

  background-color: ${theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 15%;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  border-radius: 12px;
  width: 52px;
  height: 52px;
`;

export const UserInfoDetail = styled.View`
  margin-left: 10px;
`;

export const UserGreeting = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bold};
`;

export const IconPower = styled(Feather)`
  font-size: 28px;
  color: ${theme.colors.dark};
`;

