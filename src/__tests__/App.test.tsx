// __tests__/App.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn(({children}) => children),
      Screen: jest.fn(({children}) => children),
    }),
  };
});

test('App component renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
