import {View, Text, Button} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Link href={'/(modals)/settings'}>
        <Text>Settings</Text>
      </Link>
    </View>
  );
};

export default Profile;
