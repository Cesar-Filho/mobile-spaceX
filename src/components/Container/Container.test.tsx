import React from 'react';
import {Text} from 'react-native';

import {render} from '@utils/test-utils';
import {Container} from '@components/Container';
import {theme} from '@theme/index';

describe('Render Container', () => {
  test('it renders a default Container', () => {
    const title = 'Test Container';
    const {getByTestId, getByText} = render(
      <Container>
        <Text>{title}</Text>
      </Container>,
    );

    expect(getByText(title)).toHaveTextContent(title);
    expect(getByTestId('ComponentContainer')).toHaveStyle({
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      paddingTop: theme.spacing.MD,
      paddingRight: theme.spacing.MD,
      paddingBottom: theme.spacing.MD,
      paddingLeft: theme.spacing.MD,
      backgroundColor: theme.colors.common.white,
    });
  });

  test('it renders a justify Container', () => {
    const title = 'Test Container';
    const {getByTestId} = render(
      <Container justify="center">
        <Text>{title}</Text>
      </Container>,
    );

    expect(getByTestId('ComponentContainer')).toHaveStyle({
      justifyContent: 'center',
    });
  });

  test('it renders a align Container', () => {
    const title = 'Test Container';
    const {getByTestId} = render(
      <Container align="center">
        <Text>{title}</Text>
      </Container>,
    );

    expect(getByTestId('ComponentContainer')).toHaveStyle({
      alignItems: 'center',
    });
  });
});
