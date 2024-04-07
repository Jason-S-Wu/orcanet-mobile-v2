import {
  View,
  ActivityIndicator,
  Alert,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {router} from 'expo-router';
import {Button, Card, Text, Searchbar} from 'react-native-paper';
import {mockFileData} from '@/constants/mock-data/mockData';
import {MarketFile} from '@/constants/types';
import {fetchFromServer} from '@/constants/mock-data/mockServerRequest';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockFiles: MarketFile[] = mockFileData; //for mock data currently

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

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({item, index}: any) => {
    const scale = scrollY.interpolate({
      inputRange: [-1, 0, 250 * index, 250 * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: [-1, 0, 250 * index, 250 * (index + 0.6)],
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={[
          styles.item,
          {
            transform: [{scale}],
            opacity,
          },
        ]}
      >
        <Card key={index} style={styles.card}>
          <Card.Title
            title={`${item.name}`}
            subtitle={`Size: ${item.size} MB`}
          />
          <Card.Content>
            <Text style={styles.text}>{`Hash: ${item.fileHash}`}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => handleViewPress(item.name)}>
              <Text>View</Text>
            </Button>
          </Card.Actions>
        </Card>
      </Animated.View>
    );
  };

  return (
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

      <SafeAreaView>
        <Animated.FlatList
          data={files}
          keyExtractor={item => item.fileHash}
          renderItem={renderItem}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true}
          )}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </SafeAreaView>
    </View>
  );
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
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },

  item: {
    flexDirection: 'row',
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: 10,
  },
});

export default Index;
