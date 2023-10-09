import {Typography} from '@components/Typography';
import styled from 'styled-components/native';

export default {
  FallbackLabel: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
  `,

  ScrollWrapper: styled.ScrollView.attrs(({theme}) => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      flex: 1,
      padding: theme.spacing.MD,
    },
  }))``,
};
