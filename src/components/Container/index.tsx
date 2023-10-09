import {
  SafeAreaProviderProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

interface ContainerProps extends SafeAreaProviderProps {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
}

export const Container = styled(SafeAreaView).attrs({
  testID: 'ComponentContainer',
})<ContainerProps>`
  flex: 1;
  padding: ${({theme}) => theme.spacing.MD}px;
  background-color: ${({theme}) => theme.colors.common.white};
  ${({justify}) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({align}) =>
    align &&
    css`
      align-items: ${align};
    `}
`;
