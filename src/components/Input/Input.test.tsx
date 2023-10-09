import React from 'react';

import {Input} from '@components/Input';
import {fireEvent, render} from '@utils/test-utils';

describe('Render Input', () => {
  it('should render the Input component correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <Input label="Name" placeholder="Enter your name" />,
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Enter your name')).toBeTruthy();
  });

  it('should reflect the passed properties', () => {
    const {getByPlaceholderText} = render(
      <Input
        label="Email"
        placeholder="Enter your email"
        value="example@email.com"
      />,
    );

    expect(getByPlaceholderText('Enter your email').props.value).toBe(
      'example@email.com',
    );
  });

  it('should call the onChangeText function when text is changed', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <Input
        label="Password"
        placeholder="Enter your password"
        onChangeText={onChangeTextMock}
      />,
    );

    fireEvent.changeText(
      getByPlaceholderText('Enter your password'),
      'newPassword123',
    );

    expect(onChangeTextMock).toHaveBeenCalledWith('newPassword123');
  });

  it('should render error', () => {
    const error = 'Error Found';
    const {getByText} = render(
      <Input
        label="Password"
        placeholder="Enter your password"
        error={error}
      />,
    );

    expect(getByText(error)).toHaveTextContent(error);
  });

  it('should render flex Input', () => {
    const {getByTestId} = render(
      <Input label="Password" placeholder="Enter your password" flex={2} />,
    );

    expect(getByTestId('ContainerInput')).toHaveStyle({
      flexGrow: 2,
    });
  });
});
