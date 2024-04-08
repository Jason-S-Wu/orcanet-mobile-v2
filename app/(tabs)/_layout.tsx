import React from 'react';
import {Tabs} from 'expo-router';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import theme from '@/constants/Colors';
import {User1, User2, User3} from '@/constants/mock-data/mockData';

const Layout = () => {
  const user = User1;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}
    >
      <Tabs.Screen
        name="index" // index is the default route in this case it's files
        options={{
          tabBarLabel: 'Files',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="file" size={size} color={color} />
          ),
          title: 'My Files',
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
          ),
          title: 'Market',
        }}
      />
      <Tabs.Screen
        name="profile"
        initialParams={{user}}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default Layout;
