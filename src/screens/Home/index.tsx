import React, {useMemo, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAllLaunchesQuery} from '@store/modules/api';
import {LAUNCHES_HEIGHT} from '@components/LaunchesItem/styles';
import {LaunchesItem} from '@components/LaunchesItem';
import {ListHeader} from '@components/ListHeader';
import {ILaunches} from '@store/modules/api/interface';
import {Fallback} from '@components/Fallback';
import {Loading} from '@components/Loading';
import {Routes} from '@navigators/routes';

import S from './styles';

export function HomeScreen() {
  const {data, isLoading} = useAllLaunchesQuery({});
  const [search, setSearch] = useState('');
  const {navigate} = useNavigation();

  const list = useMemo(
    () => data?.filter(item => item.mission_name.includes(search)),
    [data, search],
  );

  const renderItem: ListRenderItem<ILaunches> = ({item}) => (
    <LaunchesItem item={item}>
      <S.ShowVideo
        title="Ver Lançamento"
        onPress={() => navigate(Routes.WEB_VIEW, {uri: item.links.video_link})}
      />

      <S.Detail
        mode="outlined"
        title="Detalhe"
        onPress={() => navigate(Routes.WEB_VIEW, {uri: item.links.wikipedia})}
      />
    </LaunchesItem>
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <ListHeader search={search} setSearch={setSearch} />
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={10}
        ListEmptyComponent={Fallback}
        getItemLayout={(_data, index) => ({
          length: LAUNCHES_HEIGHT,
          index,
          offset: LAUNCHES_HEIGHT * index,
        })}
      />
    </S.Container>
  );
}
