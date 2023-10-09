import React from 'react';
import {Text} from 'react-native';

import {launchesItemMock} from './LaunchesItem.mock';
import {LaunchesItem} from '@components/LaunchesItem';
import {formatDate} from '@utils/format';
import {render} from '@utils/test-utils';

describe('Render LaunchesItem', () => {
  test('it renders a default LaunchesItem', () => {
    const title = 'Test LaunchesItem';
    const {getByText} = render(
      <LaunchesItem item={launchesItemMock}>
        <Text>{title}</Text>
      </LaunchesItem>,
    );

    expect(getByText(title)).toHaveTextContent(title);
    expect(getByText(launchesItemMock.mission_name)).toHaveTextContent(
      launchesItemMock.mission_name,
    );
    expect(
      getByText(formatDate(launchesItemMock.launch_date_utc)),
    ).toHaveTextContent(formatDate(launchesItemMock.launch_date_utc));
  });
});
