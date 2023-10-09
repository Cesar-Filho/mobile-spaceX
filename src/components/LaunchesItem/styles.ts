import styled from 'styled-components/native';
import {Card as ComponentCard} from '@components/Card';
import {Typography} from '@components/Typography';

export const LAUNCHES_HEIGHT = 200;

export default {
  Card: styled(ComponentCard)`
    margin-vertical: ${({theme}) => theme.spacing.XS}px;
    margin-horizontal: ${({theme}) => theme.spacing.MD}px;
    align-items: center;
    height: ${LAUNCHES_HEIGHT}px;
  `,

  Container: styled.View`
    flex-direction: column;
    flex: 1;
    margin-left: ${({theme}) => theme.spacing.SM}px;
  `,

  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  Title: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
  `,

  Subtitle: styled(Typography)`
    color: ${({theme}) => theme.colors.secondary};
    margin-left: ${({theme}) => theme.spacing.XXS}px;
  `,

  ImageRocket: styled.Image`
    width: 90px;
    height: 176px;
  `,
};
