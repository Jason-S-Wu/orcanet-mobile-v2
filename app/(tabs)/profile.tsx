import {View} from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router';
import {Button, Divider, Text} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';

const Profile = () => {
  const router = useRouter();

  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Account
      </Text>
      <Text style={{marginLeft: 20, fontSize: 18}}>
        User ID:{' '}
        <Text style={{fontSize: 10}}>
          d9b58304b42647c42ccf62f9d856a292e447b387a5b6a9fc9dd784b1884297ba
        </Text>
      </Text>
      <Text style={{marginLeft: 20, fontSize: 18}}>Balance: 0.00</Text>
      <Divider />
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Transactions
      </Text>
      <Divider />
      <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
        Statistics
      </Text>
      <Divider />
      <Button
        mode="contained-tonal"
        onPress={() => router.push('/(modals)/settings')}
        style={{margin: 20, padding: 10, borderRadius: 10}}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="settings" size={24} style={{marginRight: 10}} />
          <Text style={{fontSize: 20}}>Settings</Text>
        </View>
      </Button>
    </View>
  );
};

export default Profile;
