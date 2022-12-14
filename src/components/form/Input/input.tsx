import React from 'react';
import { theme } from '../../../global/styles/theme';
import { Container } from './input-styles';

export const Input = ({ ...props }) => {
  return <Container placeholderTextColor={theme.colors.gray500} {...props} />;
};
