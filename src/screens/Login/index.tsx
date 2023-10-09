import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@navigators/routes';
import {TextInput} from 'react-native';

import {useAppDispatch} from '@store/hook';
import {AuthActions} from '@store/modules/auth';
import {Container} from '@components/Container';
import {Button} from '@components/Button';
import {Input} from '@components/Input';

import Rocket from '@assets/svg/rocket.svg';

import S from './styles';

export function LoginScreen() {
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');
  const passwordRef = useRef<TextInput>(null);
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    if (username) {
      setError('');
      dispatch(AuthActions.setAuth({username}));
      return navigate(Routes.HOME);
    }

    return setError('Nome do usuário é obrigatório!');
  };

  return (
    <Container align="center">
      <S.WrapperHeader>
        <Rocket width={180} height={180} />
      </S.WrapperHeader>

      <S.WrapperInput>
        <Input
          autoFocus
          label="Nome do usuário"
          value={username}
          placeholder="Digite seu nome de usuário"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => passwordRef?.current?.focus()}
          onChangeText={setUserName}
          error={error}
        />
      </S.WrapperInput>

      <Button title="Entrar" onPress={onSubmit} />
    </Container>
  );
}
