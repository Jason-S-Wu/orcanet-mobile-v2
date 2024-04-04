import {View} from 'react-native';
import React from 'react';
import {router} from 'expo-router';
import {Button, Card, Text} from 'react-native-paper';

const Index = () => {
  return (
    <View>
      <Card style={{margin: 20, padding: 5}}>
        <Card.Title
          title="File1.mp4"
          subtitle="File Size (Already Downloaded)"
        />
        <Card.Content>
          <Text style={{fontSize: 10}}>
            b2a942392826b0faa61a8fce1a0a9c8ed1376883e23b82b396b25d22be86592a
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/viewer/file1.mp4')}>View</Button>
        </Card.Actions>
      </Card>
      <Card style={{marginTop: 0, margin: 20, padding: 5}}>
        <Card.Title
          title="File2.mp4"
          subtitle="File Size (Already Downloaded)"
        />
        <Card.Content>
          <Text style={{fontSize: 10}}>
            1d79a341a4e4cd73889b848807caf77bf5336f3732517d7a4c57addf98f79f92
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/viewer/file2.mp4')}>View</Button>
        </Card.Actions>
      </Card>
      <Card style={{marginTop: 0, margin: 20, padding: 5}}>
        <Card.Title
          title="File3.mp4"
          subtitle="File Size (Already Downloaded)"
        />
        <Card.Content>
          <Text style={{fontSize: 10}}>
            29445cfc2eef20bd4374bbac1cfe7dda050428117304f9e409e7e0b5440d1d59
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/viewer/file3.mp4')}>View</Button>
        </Card.Actions>
      </Card>
      {/* TODO:  Case Where there are no Files in Files Tab */}
      <Card style={{marginTop: 0, margin: 20, padding: 5}}>
        <Card.Content>
          <Text variant="bodyLarge">Please Download Files From Market</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/(tabs)/market')}>Market</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Index;
