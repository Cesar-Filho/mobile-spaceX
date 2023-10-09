import React from 'react';

import {useAppDispatch, useAppSelector} from '@store/hook';
import {AuthActions} from '@store/modules/auth';
import {Container} from '@components/Container';
import {Button} from '@components/Button';

import S from './styles';

export function SettingsScreen() {
  const dispatch = useAppDispatch();
  const detail = useAppSelector(state => state.auth.detail);

  const logout = () => dispatch(AuthActions.logout());

  return (
    <Container justify="space-between" align="center">
      <S.Title variation="title">{detail.username}</S.Title>
      <Button title="Sair" onPress={logout} />
    </Container>
  );
}
