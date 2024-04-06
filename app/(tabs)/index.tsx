import {View, ActivityIndicator, Alert} from 'react-native';
import React, {useState} from 'react';
import {router} from 'expo-router';
import {Button, Card, Text} from 'react-native-paper';

//mock server response for testing purpose can be removed once we connec to peer
const fetchFromServer = (fileName: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 6000); // Adjust the timeout as needed
  });
};

const Index = () => {
  const [loading, setLoading] = useState(false);

  const files = ['a']; //for mock data currently will fetch files from stoarge

  const handleViewPress = async (fileName: string) => {
    setLoading(true);
    try {
      await Promise.race([fetchFromServer(fileName), timeoutPromise()]);
      router.push(`/viewer/${fileName}`);
    } catch (error) {
      if (error === 'Timeout') {
        Alert.alert(
          'Error',
          'Failed to load file due to timeout. Please try again later.'
        );
      } else {
        Alert.alert('Error', 'Failed to load file. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const timeoutPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Timeout');
      }, 5000); // change timeout limit here
    });
  };

  if (loading) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      >
        <ActivityIndicator color="#ffffff" size="large" />
      </View>
    );
  }

  if (files.length === 0) {
    return (
      <Card style={{marginTop: 0, margin: 20, padding: 5}}>
        <Card.Content>
          <Text variant="bodyLarge">Please Download Files From Market</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/(tabs)/market')}>Market</Button>
        </Card.Actions>
      </Card>
    );
  }

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
          <Button onPress={() => handleViewPress('file1.mp4')}>
            <Text>View</Text>
          </Button>
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
          <Button onPress={() => handleViewPress('file2.mp4')}>
            <Text>View</Text>
          </Button>
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
          <Button onPress={() => handleViewPress('file3.mp4')}>View</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Index;
