import React from 'react';
import UserAgent from 'react-native-user-agent';
import {useRoute} from '@react-navigation/native';

import {Loading} from '@components/Loading';

import S from './styles';

export function WebViewScreen() {
  const {params} = useRoute();

  return (
    <S.Web
      source={{uri: params?.uri}}
      userAgent={UserAgent.getUserAgent()}
      originWhitelist={['*']}
      renderLoading={() => <Loading />}
    />
  );
}
