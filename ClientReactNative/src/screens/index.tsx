import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from './login';
import { Pokemon } from './pokemon';
import { Wifi } from './wifi';
import { LogIn, Aperture, Wifi as Internet } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

export const Home = (props) => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator {...props}>
      <Drawer.Screen
        name='home-menu'
        component={Login}
        options={{
          drawerIcon: () => <LogIn color='black' size={25} />,
          headerShown: true,
          title: t('login'),
          headerTitleStyle: { color: 'black' },
          drawerActiveBackgroundColor: '#0BBE5F',
          drawerActiveTintColor: '#000000',
        }}
      />

      <Drawer.Screen
        name='joke-menu'
        component={Pokemon}
        options={{
          drawerIcon: () => <Aperture color='black' size={25} />,
          headerShown: true,
          title: t('pokemos'),
          headerTitleStyle: { color: 'black' },
          drawerActiveBackgroundColor: '#0BBE5F',
          drawerActiveTintColor: '#000000',
        }}
      />

      <Drawer.Screen
        name='wifi-menu'
        component={Wifi}
        options={{
          drawerIcon: () => <Internet color='black' size={25} />,
          headerTitleStyle: { color: 'black' },
          headerShown: true,
          title: t('wifi'),
          drawerActiveBackgroundColor: '#0BBE5F',
          drawerActiveTintColor: '#000000',
        }}
      />
    </Drawer.Navigator>
  );
};
