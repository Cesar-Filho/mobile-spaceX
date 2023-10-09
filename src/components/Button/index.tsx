import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  mode?: 'container' | 'outlined' | 'text';
  secondary?: boolean;
  flex?: number;
}

export function Button({
  disabled,
  title,
  mode,
  secondary,
  flex,
  ...props
}: ButtonProps) {
  return (
    <S.Container flex={flex}>
      <S.Button
        activeOpacity={0.8}
        testID="ComponentButton"
        disabled={disabled}
        mode={mode}
        secondary={secondary}
        {...props}>
        {disabled ? (
          <S.Loading testID="Loading" />
        ) : (
          <S.Label mode={mode} secondary={secondary} variation="button">
            {title}
          </S.Label>
        )}
      </S.Button>
    </S.Container>
  );
}
