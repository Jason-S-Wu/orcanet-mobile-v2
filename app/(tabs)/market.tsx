import React, {useState} from 'react';
import {View, ActivityIndicator, Alert} from 'react-native';
import {Card, Searchbar, Text, Button, Snackbar} from 'react-native-paper';
import {router} from 'expo-router';

import {getDataFromMarketRequest} from '@/constants/mock-data/mockServerRequest';
import {MarketFile, MarketInfo} from '@/constants/types';

const Market = () => {
  const [hash, setHash] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [fileDetails, setFileDetails] = useState<MarketInfo>();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleHash = (hash: string) => {
    setHash(hash);
  };

  const searchFile = async () => {
    setLoading(true);
    try {
      const response: any = await Promise.race([
        getDataFromMarketRequest(hash), // Your API request
        timeoutPromise(),
      ]);

      setLoading(false);

      if (response !== null && response !== undefined) {
        setFileDetails(response);
      } else {
        // This condition will be triggered if response is null or undefined
        Alert.alert('Error', 'Bad Response.');
      }
    } catch (error) {
      if (error === 'Timeout') {
        Alert.alert('Error', 'Timeout have occured');
      } else {
        Alert.alert('Error', `${error}`);
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

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const buyFile = (fileInfo: MarketInfo) => {
    Alert.alert('Buy File', 'Implement the buy file functionality here.');
  };

  return (
    <View>
      <Searchbar
        placeholder={'File Hash'}
        value={hash}
        onChangeText={handleHash}
        style={{margin: 20}}
        onSubmitEditing={searchFile}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{marginTop: 20}}
        />
      ) : fileDetails ? (
        <Card style={{marginTop: 0, margin: 20, padding: 5}}>
          <Card.Title
            title={`File Name: ${fileDetails.name}`}
            subtitle={`Cost: ${fileDetails.price * fileDetails.size}`}
          />
          {showDetails ? (
            <Card.Content>
              <View>
                <Text>Owner ID: {fileDetails.id}</Text>
                <Text>IP: {fileDetails.ip}</Text>
                <Text>PORT: {fileDetails.port}</Text>
                <Text>Cost Per MB: {fileDetails.price}</Text>
                <Text>Size: {fileDetails.size} MB</Text>
                <Button onPress={() => buyFile(fileDetails)}>Buy File</Button>
              </View>
            </Card.Content>
          ) : null}
          <Card.Actions>
            <Button onPress={() => toggleDetails()}>
              {showDetails ? 'Hide Details' : 'View Details'}
            </Button>
          </Card.Actions>
        </Card>
      ) : null}
    </View>
  );
};

export default Market;
