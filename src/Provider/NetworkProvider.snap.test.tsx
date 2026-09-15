import { Text } from 'react-native';

import { QueryClient } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';

import { NetworkProvider } from './NetworkProvider';

jest.mock('../query/queryClient', () => ({
  sharedQueryClient: new (require('@tanstack/react-query').QueryClient)(),
}));

describe('NetworkProvider Snapshot Test', () => {
  it('should match snapshot with default shared query client', async () => {
    const { toJSON } = await render(
      <NetworkProvider>
        <Text>Child Component</Text>
      </NetworkProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with custom query client prop', async () => {
    const customClient = new QueryClient();

    const { toJSON } = await render(
      <NetworkProvider client={customClient}>
        <Text>Child Component</Text>
      </NetworkProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});