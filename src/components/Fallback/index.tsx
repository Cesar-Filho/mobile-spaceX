import React from 'react';
import {Container} from '@components/Container';

import S from './styles';

export function Fallback() {
  return (
    <Container>
      <S.FallbackLabel variation="title">
        Não foi possível carregar as informações.
      </S.FallbackLabel>
    </Container>
  );
}
