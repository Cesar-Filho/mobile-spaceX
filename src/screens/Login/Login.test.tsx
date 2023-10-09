import React from 'react';
import {act, fireEvent, render} from '@utils/test-utils';

import {AuthActions} from '@store/modules/auth';
import {Navigator} from '@navigators/index';

describe('LoginScreen', () => {
  it('calls signIn function when the "Entrar" button is pressed', async () => {
    const setAuthMocked = jest.spyOn(AuthActions, 'setAuth');
    const username = 'testuser';

    const {getByText, getByPlaceholderText, queryByPlaceholderText} = render(
      <Navigator />,
    );
    const usernameInput = getByPlaceholderText('Digite seu nome de usuário');

    fireEvent.changeText(usernameInput, username);
    const signInButton = getByText('Entrar');

    await act(async () => {
      await fireEvent.press(signInButton);
    });

    const usernameInputNew = queryByPlaceholderText(
      'Digite seu nome de usuário',
    );

    expect(usernameInputNew).not.toBeOnTheScreen();
    expect(setAuthMocked).toBeCalledWith({username});
  });
});
