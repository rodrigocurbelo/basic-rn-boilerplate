import { DrawerNavigator } from 'react-navigation';

import Second from './modules/Second';
import First from './modules/First';

const SimpleApp = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: First,
    },
    SecondPage: {
      path: '/second',
      screen: Second,
    },
  }, {
    initialRouteName: 'First',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default SimpleApp;
