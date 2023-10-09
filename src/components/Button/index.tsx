import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  mode?: 'container' | 'outlined' | 'text';
  secondary?: boolean;
}

export function Button({
  disabled,
  title,
  mode,
  secondary,
  ...props
}: ButtonProps) {
  return (
    <S.Container>
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
