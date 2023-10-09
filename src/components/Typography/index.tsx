import React from 'react';
import {TextProps} from 'react-native';

import {typography} from '@theme/index';
import S from './styles';

interface TypographyProps extends TextProps {
  variation: keyof typeof typography;
}

export function Typography({
  children,
  variation,
  style,
  ...props
}: TypographyProps) {
  return (
    <S.Label {...props} style={[style, typography[variation]]}>
      {children}
    </S.Label>
  );
}
