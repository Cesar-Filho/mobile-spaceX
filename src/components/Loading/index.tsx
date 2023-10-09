import React from 'react';

import {Container} from '@components/Container';

import S from './styles';

export function Loading() {
  return (
    <Container>
      <S.Activity testID="Loading" />
    </Container>
  );
}
