import React from 'react';

import {formatDate} from '@utils/format';
import {ILaunches} from '@store/modules/api/interface';

import S from './styles';

export function LaunchesItem({
  item,
  children,
}: {
  item: ILaunches;
  children: React.ReactNode;
}) {
  return (
    <S.Card row>
      <S.ImageRocket
        source={{uri: item.links.mission_patch_small}}
        resizeMode="contain"
      />

      <S.Container>
        <S.Row>
          <S.Title variation="subtitle">Missão:</S.Title>
          <S.Subtitle variation="body">{item.mission_name}</S.Subtitle>
        </S.Row>

        <S.Row>
          <S.Title variation="subtitle">Lançamento:</S.Title>
          <S.Subtitle variation="body">
            {formatDate(item.launch_date_utc)}
          </S.Subtitle>
        </S.Row>

        <S.Row>
          <S.Title variation="subtitle">Foguete:</S.Title>
          <S.Subtitle variation="body">{item.rocket.rocket_name}</S.Subtitle>
        </S.Row>

        <S.Row>
          <S.Title variation="subtitle">Tipo:</S.Title>
          <S.Subtitle variation="body">{item.rocket.rocket_type}</S.Subtitle>
        </S.Row>

        {children}
      </S.Container>
    </S.Card>
  );
}
