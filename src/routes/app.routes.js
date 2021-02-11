import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Winner from '../pages/Winner';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Winners" component={Winner} />
  </AppStack.Navigator>
);

export default AppRoutes;
