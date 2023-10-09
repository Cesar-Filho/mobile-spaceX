import styled, {css} from 'styled-components/native';

export default {
  Container: styled.View`
    flex-direction: row;
  `,

  Content: styled.View<{row?: boolean}>`
    flex: 1;
    padding: ${({theme}) => theme.spacing.MD}px;
    border-radius: ${({theme}) => theme.spacing.SM}px;
    background-color: ${({theme}) => theme.colors.common.white};
    shadow-color: ${({theme}) => theme.colors.common.black};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;

    ${({row}) =>
      row &&
      css`
        flex-direction: row;
      `}
  `,
};
