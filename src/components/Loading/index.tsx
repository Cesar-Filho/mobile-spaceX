import React from 'react';

import {Container} from '@components/Container';

import S from './styles';

export function Loading() {
  return (
    <Container justify="center" align="center">
      <S.Activity testID="Loading" />
    </Container>
  );
}
