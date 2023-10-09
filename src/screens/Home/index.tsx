import React from 'react';
import {Text} from 'react-native';

import {useAllLaunchesQuery} from '@store/modules/api';
import {Loading} from '@components/Loading';
import {Container} from '@components/Container';

import S from './styles';

export function HomeScreen() {
  const {data, isLoading} = useAllLaunchesQuery({});

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.length) {
    return (
      <Container>
        <S.FallbackLabel variation="title">
          Não foi possível carregar as informações do usuário.
        </S.FallbackLabel>
      </Container>
    );
  }

  return (
    <S.ScrollWrapper>
      <Text>home</Text>
    </S.ScrollWrapper>
  );
}
