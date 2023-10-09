import styled from 'styled-components/native';
import {Button} from '@components/Button';

export default {
  Detail: styled(Button)`
    margin-top: ${({theme}) => theme.spacing.XXS}px;
  `,

  ShowVideo: styled(Button)`
    margin-top: ${({theme}) => theme.spacing.XXS}px;
  `,
};
