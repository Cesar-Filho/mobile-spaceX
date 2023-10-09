import styled, {css} from 'styled-components/native';
import {TextProps, TouchableOpacityProps} from 'react-native';
import {Typography} from '@components/Typography';

interface ButtonProps extends TouchableOpacityProps {
  mode?: 'container' | 'outlined' | 'text';
  secondary?: boolean;
}

interface LabelProps extends TextProps {
  mode?: 'container' | 'outlined' | 'text';
  secondary?: boolean;
}

export default {
  Container: styled.View<{flex?: number}>`
    flex-direction: row;
    ${({flex}) =>
      flex &&
      css`
        flex: ${flex};
      `}
  `,
  Button: styled.TouchableOpacity<ButtonProps>`
    flex: 1;
    border-radius: 8px;
    height: 40px;
    justify-content: center;
    align-items: center;

    ${({disabled}) =>
      disabled &&
      css`
        opacity: 0.5;
      `}

    ${({mode = 'container', secondary}) => {
      if (mode === 'container') {
        return css`
          background-color: ${({theme}) =>
            secondary ? theme.colors.secondary : theme.colors.primary};
        `;
      }
      if (mode === 'outlined') {
        return css`
          border-width: 1px;
          border-color: ${({theme}) =>
            secondary ? theme.colors.secondary : theme.colors.primary};
        `;
      }
    }}
  `,

  Loading: styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.common.white,
  }))``,

  Label: styled(Typography)<LabelProps>`
    ${({mode = 'container', secondary}) => {
      if (mode !== 'container') {
        return css`
          color: ${({theme}) =>
            secondary ? theme.colors.secondary : theme.colors.primary};
        `;
      }
    }}
  `,
};
