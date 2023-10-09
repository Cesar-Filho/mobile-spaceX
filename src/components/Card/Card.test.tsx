import React from 'react';
import {Text} from 'react-native';

import {render} from '@utils/test-utils';
import {Card} from '@components/Card';
import {theme} from '@theme/index';

describe('Render Card', () => {
  test('it renders a default Card', () => {
    const title = 'Test Card';
    const {getByTestId, getByText} = render(
      <Card>
        <Text>{title}</Text>
      </Card>,
    );

    expect(getByText(title)).toHaveTextContent(title);
    expect(getByTestId('ComponentCard')).toHaveStyle({
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
});
