import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';

import {Typography} from '@components/Typography';

export default {
  Container: styled.View<{flex?: number}>`
    flex-direction: row;
    ${({flex}) =>
      flex &&
      css`
        flex: ${flex};
      `}
  `,

  Content: styled.View`
    height: 84px;
    flex: 1;
    margin-vertical: ${({theme}) => theme.spacing.XS}px;
  `,

  Label: styled(Typography)`
    margin-bottom: ${({theme}) => theme.spacing.XXS}px;
    color: ${({theme}) => theme.colors.primary};
  `,

  Input: styled.TextInput`
    width: 100%;
    border-width: ${StyleSheet.hairlineWidth}px;
    padding: ${({theme}) => theme.spacing.SM}px;
    border-radius: ${({theme}) => theme.spacing.XS}px;
    border-color: ${({theme}) => theme.colors.primary};
  `,

  ErrorMessage: styled(Typography)`
    color: ${({theme}) => theme.colors.error};
    margin-top: ${({theme}) => theme.spacing.XXS}px;
  `,
};
