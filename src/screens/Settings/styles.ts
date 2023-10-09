import styled from 'styled-components/native';

import {Typography} from '@components/Typography';

export default {
  Title: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
  `,
};
