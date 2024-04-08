import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, Searchbar, Text, Snackbar, ProgressBar} from 'react-native-paper';

import {getDataFromMarketRequest} from '@/constants/mock-data/mockServerRequest';
import {buyFileRequest} from '@/constants/mock-data/mockServerRequest';
import {MarketInfo} from '@/constants/types';
import theme from '@/constants/Colors';

const Market = () => {
  const [hash, setHash] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [fileDetails, setFileDetails] = useState<MarketInfo>();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

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

  const buyFile = async (fileInfo: MarketInfo) => {
    setLoading(true);
    try {
      const response: any = await Promise.race([
        buyFileRequest(fileInfo), // Your API request
        timeoutPromise(),
      ]);

      if (response !== null && response !== undefined) {
        setShowSuccess(true);
        setShowDownload(true);
      } else {
        // This condition will be triggered if response is null or undefined
        Alert.alert('Error', 'Bad Response.');
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showDownload) {
      const simulateDownload = async () => {
        await new Promise<void>(resolve => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += Math.random() * 100;
            if (fileDetails && progress >= fileDetails.size) {
              clearInterval(interval);
              resolve();
            }
            setDownloadProgress(progress);
          }, 500);
        });
      };

      simulateDownload();
    }
  }, [showDownload]);

  const downloadBar = (fileSize: number) => {
    const progressPercentage = Number(
      Math.min((downloadProgress / fileSize) * 100, 100).toFixed(2)
    );
    const blueComponent = Math.round((progressPercentage * 128) / 100);
    const progressBarColor = `rgb(0, ${255 - blueComponent * 2}, ${
      255 - blueComponent
    })`;
    return (
      <View style={{marginTop: 10}}>
        <ProgressBar
          progress={progressPercentage / 100}
          color={progressBarColor}
          style={{height: 20, borderRadius: 15, width: '100%'}}
        />
        <Text style={{marginTop: 5, alignItems: 'center'}}>
          {progressPercentage}%
        </Text>
      </View>
    );
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
        <Card style={styles.cardContainer}>
          <Card.Title
            title={`File Name: ${fileDetails.name}`}
            subtitle={`Cost: ${fileDetails.price * fileDetails.size}`}
          />
          {showDetails ? (
            <Card.Content>
              <View>
                <View style={styles.container}>
                  <View style={styles.row}>
                    <Text style={styles.label}>File Hash:</Text>
                    <Text style={styles.value}>{fileDetails.fileHash}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Cost Per MB:</Text>
                    <Text style={styles.value}>{fileDetails.price}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Size:</Text>
                    <Text style={styles.value}>{fileDetails.size} MB</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>User ID:</Text>
                    <Text style={styles.value}>{fileDetails.id}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>IP:</Text>
                    <Text style={styles.value}>{fileDetails.ip}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Port:</Text>
                    <Text style={styles.value}>{fileDetails.port}</Text>
                  </View>
                </View>

                {showDownload ? (
                  downloadBar(fileDetails.size)
                ) : (
                  <TouchableOpacity
                    onPress={() => buyFile(fileDetails)}
                    style={styles.buyButton}
                  >
                    <Text style={styles.buyButtonText}>Buy File</Text>
                  </TouchableOpacity>
                )}
              </View>
            </Card.Content>
          ) : null}
          <Card.Actions>
            <TouchableOpacity
              onPress={() => toggleDetails()}
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>
                {showDetails ? 'Hide Details' : 'View Details'}
              </Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      ) : null}

      <Snackbar
        visible={showSuccess}
        onDismiss={() => setShowSuccess(false)}
        action={{
          label: 'Close',
          onPress: () => setShowSuccess(false),
        }}
      >
        File purchased successfully!
      </Snackbar>

      <Snackbar
        visible={showError}
        onDismiss={() => setShowError(false)}
        action={{
          label: 'Close',
          onPress: () => setShowError(false),
        }}
      >
        Failed to purchase file. Please try again later.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 0,
    margin: 20,
    padding: 10,
    backgroundColor: '#f0f4fb',
    borderRadius: 8,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  container: {
    backgroundColor: theme.colors.primaryContainer,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: theme.colors.onPrimaryContainer,
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    color: theme.colors.onPrimaryContainer,
    fontSize: 16,
  },
  buyButton: {
    marginTop: 15,
    backgroundColor: '#ADD8E6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsButton: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 16,
  },
});

export default Market;
