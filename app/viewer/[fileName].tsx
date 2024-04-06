import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useLocalSearchParams, useNavigation} from 'expo-router';

const Viewer = () => {
  const { fileName } = useLocalSearchParams<{ fileName: string }>();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View>
      <Text>Viewer</Text>
      <Text>{fileName} is being viewed.</Text>
      <Button onPress={handleBackPress}  style={{ marginTop: 10 }}>
        <Text>Go back to file page</Text>
      </Button>
    </View>
  );
};

export default Viewer;