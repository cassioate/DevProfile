import React from 'react';
import {
  Container,
  Header,
  IconPower,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './home-styles';

import avatarDefault from '../../assets/avatar02.png';

export const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => null}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>João</UserName>
            </UserInfoDetail>
          </UserInfo>
          <IconPower name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
