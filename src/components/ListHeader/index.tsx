import React from 'react';

import {Input} from '@components/Input';

import S from './styles';

interface ListHeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function ListHeader({search, setSearch}: ListHeaderProps) {
  return (
    <S.Card>
      <Input
        flex={2}
        placeholder="Buscar por missão"
        onChangeText={setSearch}
        label="Nome da missão"
        value={search}
      />

      <S.ButtonClear title="Limpar" onPress={() => setSearch('')} flex={1} />
    </S.Card>
  );
}
