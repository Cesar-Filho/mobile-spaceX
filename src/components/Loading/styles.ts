import styled from 'styled-components/native';

export default {
  Activity: styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.primary,
  }))``,
};
