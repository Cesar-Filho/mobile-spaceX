import React, {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import S from './styles';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

function ComponentInput(
  {style, label, error, ...props}: InputProps,
  ref: React.LegacyRef<TextInput>,
) {
  return (
    <S.Container style={style}>
      <S.Label variation="body">{label}</S.Label>
      <S.Input ref={ref} {...props} />
      {error && <S.ErrorMessage variation="body">{error}</S.ErrorMessage>}
    </S.Container>
  );
}

export const Input = forwardRef<TextInput, InputProps>(ComponentInput);
