import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SettingsScreen} from '@screens/Settings';
import {HomeScreen} from '@screens/Home';
import {Routes} from './routes';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name={Routes.SETTINGS}
        component={SettingsScreen}
        options={{title: 'Perfil'}}
      />
    </Tab.Navigator>
  );
}
