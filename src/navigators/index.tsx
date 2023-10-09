import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '@store/hook';
import {LoginScreen} from '@screens/Login';

import {Routes} from './routes';
import {BottomTab} from './bottomTab';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  return (
    <Stack.Navigator>
      {isLogged ? (
        <Stack.Screen
          name={Routes.BOTTOM_TAB}
          component={BottomTab}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={Routes.LOGIN}
          component={LoginScreen}
          options={{
            title: 'Login',
            animationTypeForReplace: isLogged ? 'pop' : 'push',
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};
