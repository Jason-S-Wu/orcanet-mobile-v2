import React from 'react';
import {Tabs} from 'expo-router';
import Colors from '@/constants/Colors';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
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
