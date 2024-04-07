import {
  View,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {router} from 'expo-router';
import {Button, Card, Text, Searchbar} from 'react-native-paper';
import {marketData} from '@/constants/mock-data/MockMarketData';
import {MarketFile} from '@/constants/mock-data/types';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockFiles: MarketFile[] = marketData; //for mock data currently

  const files = mockFiles.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  if (mockFiles.length === 0) {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text}>Please Download Files From Market</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push('/(tabs)/market')}>
            Go To Market
          </Button>
        </Card.Actions>
      </Card>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator color="#ffffff" size="large" />
          </View>
        )}
        <Searchbar
          style={styles.searchBar}
          placeholder="Search file name..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />

        {files.map((file, index) => (
          <Card key={index} style={styles.card}>
            <Card.Title
              title={`${file.name}`}
              subtitle={`Size: ${file.size} MB`}
            />
            <Card.Content>
              <Text style={styles.text}>{`Hash: ${file.fileHash}`}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleViewPress(file.name)}>
                <Text>View</Text>
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

//mock server response for testing purpose can be removed once we connec to peer
const fetchFromServer = (fileName: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 2000); // Adjust the timeout as needed
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  card: {
    marginTop: 0,
    margin: 20,
    padding: 5,
  },
  searchBar: {
    margin: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default Index;
