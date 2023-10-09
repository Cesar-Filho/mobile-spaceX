import React from 'react';

import {fireEvent, render} from '@utils/test-utils';
import {theme, typography} from '@theme/index';
import {Button} from '@components/Button';

describe('Render Button', () => {
  test('it renders a default button', () => {
    const title = 'Test Button';
    const {getByTestId, getByText} = render(<Button title={title} />);
    const component = getByTestId('ComponentButton');

    expect(component).toHaveTextContent(title);
    expect(component).toHaveStyle({
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    });
    expect(getByText(title)).toHaveStyle(typography.button);
  });

  test('it calls the onPress callback when clicked', () => {
    const title = 'Test Button';
    const click = jest.fn();
    const {getByTestId} = render(<Button title={title} onPress={click} />);

    fireEvent.press(getByTestId('ComponentButton'));

    expect(click).toBeCalledTimes(1);
  });

  test('it calls the onPress callback when clicked in loading', () => {
    const title = 'Test Button';
    const click = jest.fn();
    const {getByTestId} = render(
      <Button title={title} onPress={click} disabled={true} />,
    );
    const component = getByTestId('ComponentButton');

    fireEvent.press(component);

    expect(click).not.toBeCalled();
    expect(getByTestId('Loading')).toBeOnTheScreen();
    expect(component).toHaveStyle({opacity: 0.5});
  });

  test('it renders a outlined button', () => {
    const title = 'Test Button';

    const {getByTestId, getByText} = render(
      <Button title={title} mode="outlined" />,
    );

    expect(getByTestId('ComponentButton')).toHaveStyle({
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderTopColor: theme.colors.primary,
      borderRightColor: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      borderLeftColor: theme.colors.primary,
    });
    expect(getByText(title)).toHaveStyle({
      ...typography.button,
      color: theme.colors.primary,
    });
  });
});
