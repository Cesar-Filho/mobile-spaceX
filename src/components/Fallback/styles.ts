import styled from 'styled-components/native';
import {Typography} from '@components/Typography';

export default {
  FallbackLabel: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
  `,
};
