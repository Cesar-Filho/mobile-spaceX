import React from 'react';

import {fireEvent, render} from '@utils/test-utils';
import {ListHeader} from '@components/ListHeader';

describe('Render ListHeader', () => {
  test('it renders a default ListHeader', () => {
    const search = 'Falcon';
    const setSearch = jest.fn();
    const {getByPlaceholderText, getByText} = render(
      <ListHeader search={search} setSearch={setSearch} />,
    );

    const button = getByText('Limpar');
    const input = getByPlaceholderText('Buscar por missão');

    fireEvent.press(button);

    expect(input.props.value).toBe(search);
    expect(setSearch).toBeCalledWith('');
  });

  test('it renders change input ListHeader', () => {
    const search = 'Falcon';
    const setSearch = jest.fn();
    const {getByPlaceholderText} = render(
      <ListHeader search={search} setSearch={setSearch} />,
    );

    const input = getByPlaceholderText('Buscar por missão');
    fireEvent.changeText(input, 'Jason');

    expect(setSearch).toBeCalledWith('Jason');
  });
});
