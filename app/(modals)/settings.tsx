import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
} from 'react-native';
import {Text} from 'react-native-paper';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Keys = {
  publicKey: null | string;
  privateKey: null | string;
};

const Settings = () => {
  const [generatedKeys, setGeneratedKeys] = useState<Keys>({
    publicKey: null,
    privateKey: null,
  });
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleGenerateKey = async () => {
    handlePressIn();
    try {
      const privateKey = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Math.random().toString(),
        {encoding: Crypto.CryptoEncoding.HEX}
      );

      // Use SHA-256 to hash the private key to get a public key
      const publicKey = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        privateKey,
        {encoding: Crypto.CryptoEncoding.HEX}
      );

      setGeneratedKeys({publicKey, privateKey});

      await AsyncStorage.setItem('privateKey', privateKey);
      await AsyncStorage.setItem('publicKey', publicKey);

      Alert.alert(
        'Keys Generated',
        'Public and Private keys have been generated and stored securely.'
      );
    } catch (error) {
      console.error('Failed to generate keys:', error);
      Alert.alert('Error', 'Failed to generate keys. Please try again.');
    } finally {
      handlePressOut();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Key Management</Text>
      <Text style={styles.label}>Public Key</Text>
      <View style={styles.keyContainer}>
        <Text selectable={true} style={styles.keyText}>
          {generatedKeys.publicKey
            ? generatedKeys.publicKey
            : 'No Key Generated'}
        </Text>
      </View>
      <Text style={styles.label}>Private Key</Text>
      <View style={styles.keyContainer}>
        <Text selectable={true} style={styles.keyText}>
          {generatedKeys.privateKey ? 'Key is Generated' : 'No Key Generated'}
        </Text>
      </View>
      <Animated.View style={[styles.actionButton, {transform: [{scale}]}]}>
        <TouchableOpacity
          onPress={handleGenerateKey}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.actionText}>Generate Key Pair</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: 20,
    color: '#6a5acd',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#808080',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  actionButton: {
    backgroundColor: '#6a5acd',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  actionText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  keyContainer: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  keyText: {
    color: '#2f4f4f',
  },
});

export default Settings;
