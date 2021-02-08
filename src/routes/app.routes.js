import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Winner from '../pages/Winner';
import SignOut from '../pages/Auth/SignOut';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Winners"
      component={Winner}
      options={{
        headerLeft: false,
        headerRight: SignOut,
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
