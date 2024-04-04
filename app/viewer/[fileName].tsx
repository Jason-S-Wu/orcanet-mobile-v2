import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {useLocalSearchParams} from 'expo-router';

const Viewer = () => {
  const {fileName} = useLocalSearchParams<{fileName: string}>();
  return (
    <View>
      <Text>Viewer</Text>
      <Text>{fileName} is being viewed.</Text>
    </View>
  );
};

export default Viewer;
