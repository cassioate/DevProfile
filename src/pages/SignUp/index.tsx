import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
import { Input } from '../../components/form/Input/input';
import {
  Container,
  Content,
  Icon,
  Logo,
  ReturnButton,
  ReturnButtonText,
  Title,
} from './sign-up-styles';

import ImageLogo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { FieldValues, useForm } from 'react-hook-form';
import { InputHookControl } from '../../components/form/Input-hook/input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = yup.object({
  name: yup.string().required('Informe um nome'),
  email: yup.string().required('Inform um email').email('Informe um email valido'),
  password: yup.string().required('Informe uma senha'),
});

// the interface needs to be the same as the type of the FieldValues type in the UseForm() hook
// because of this, i use [name: string]: any as a type of InputFormHook
interface InputFormHook {
  // this mean that i can receive more than one atribute
  // i can receive email, name, password, etc... with this type of interface
  [name: string]: any;
}

export const SignUp = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (form: InputFormHook) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        //KeyboardShouldPersistTaps="handled" means that when i click outside of the input, the keyboard will be dismissed
        keyboardShouldPersistTaps="handled"
        //ContetContainerStyle is used to set the padding of the ScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={ImageLogo}></Logo>
            <Title>Register</Title>
            <InputHookControl
              error={errors.name && errors.name.message}
              name="name"
              control={control}
              autoCorrect={false}
              autoCapitalize="words"
              placeholder="Name"
            ></InputHookControl>
            <InputHookControl
              error={errors.email && errors.email.message}
              name="email"
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
            ></InputHookControl>
            <InputHookControl
              error={errors.password && errors.password.message}
              name="password"
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
            ></InputHookControl>
            <ButtonStyled title="Send" onPress={handleSubmit(handleSignUp)}></ButtonStyled>
          </Content>
        </Container>
      </ScrollView>

      <ReturnButton onPress={() => navigation.goBack()}>
        <Icon name="corner-down-left" />
        <ReturnButtonText>BACK</ReturnButtonText>
      </ReturnButton>
    </KeyboardAvoidingView>
  );
};
