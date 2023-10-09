import React from 'react';

import S from './styles';
import {ViewProps} from 'react-native';

interface CardProps extends ViewProps {
  row?: boolean;
}

export function Card({children, ...props}: CardProps) {
  return (
    <S.Container>
      <S.Content testID="ComponentCard" {...props}>
        {children}
      </S.Content>
    </S.Container>
  );
}
