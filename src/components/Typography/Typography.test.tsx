import React from 'react';

import {Typography} from '@components/Typography';
import {typography} from '@theme/index';
import {render} from '@utils/test-utils';

describe('Typography Component', () => {
  it('should render text with body style', () => {
    const {getByText} = render(
      <Typography variation="body">Hello, World!</Typography>,
    );

    expect(getByText('Hello, World!')).toHaveStyle(typography.body);
  });

  it('should render text with custom style', () => {
    const customStyle = {color: 'red', fontSize: 18};

    const {getByText} = render(
      <Typography variation="body" style={customStyle}>
        Custom Text
      </Typography>,
    );
    const textElement = getByText('Custom Text');

    expect(textElement).toHaveStyle({color: customStyle.color});
    expect(textElement).not.toHaveStyle({fontSize: customStyle.fontSize});
  });
});
