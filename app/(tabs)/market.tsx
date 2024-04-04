import {View} from 'react-native';
import React from 'react';
import {Card, Searchbar, Text, Button} from 'react-native-paper';
import {router} from 'expo-router';

const Market = () => {
  const [hash, setHash] = React.useState('');

  const handleHash = (text: string) => {
    setHash(text);
  };

  return (
    <View>
      <Searchbar
        placeholder={'File Hash'}
        value={hash}
        onChangeText={handleHash}
        style={{margin: 20}}
      />
      <Card style={{marginTop: 0, margin: 20, padding: 5}}>
        <Card.Title title="File1.mp4" subtitle="Cost Per MB: 1.0" />
        <Card.Content>
          <Text style={{fontSize: 10, marginBottom: 10}}>
            29445cfc2eef20bd4374bbac1cfe7dda050428117304f9e409e7e0b5440d1d59
          </Text>
          {/* TODO: Below if details are clicked */}
          <View>
            <Text>Owner: 0x1234567890abcdef</Text>
            <Text>IP: 127.0.0.1 </Text>
            <Text>Size: 1.2MB </Text>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button>View Details</Button>
          {/* TODO: If Else Once View Detailed Clicked Then Download / Buy Can Show Up [We can give option to stream or download or download while streaming]*/}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Market;
