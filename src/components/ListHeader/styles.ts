import styled from 'styled-components/native';
import {Card as ComponentCard} from '@components/Card';
import {Button} from '@components/Button';

export default {
  Card: styled(ComponentCard)`
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: ${({theme}) => theme.spacing.XXS}px;
    border-top-end-radius: 0;
    border-top-start-radius: 0;
    border-bottom-start-radius: 0;
    border-bottom-end-radius: 0;
    flex-direction: row;
    align-items: center;
  `,

  ButtonClear: styled(Button)`
    margin-left: ${({theme}) => theme.spacing.XS}px;
  `,
};
