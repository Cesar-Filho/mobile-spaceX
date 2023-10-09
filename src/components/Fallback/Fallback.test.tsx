import React from 'react';

import {render} from '@utils/test-utils';
import {Fallback} from '@components/Fallback';

describe('Render Fallback', () => {
  test('it renders a default Fallback', () => {
    const title = 'Não foi possível carregar as informações.';
    const {getByText} = render(<Fallback />);

    expect(getByText(title)).toHaveTextContent(title);
  });
});
