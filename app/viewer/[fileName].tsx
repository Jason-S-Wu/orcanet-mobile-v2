import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useLocalSearchParams, useNavigation} from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';

const Viewer = () => {
  const {fileName} = useLocalSearchParams<{fileName: string}>();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Viewer</Text>
      <Text>{fileName} is being viewed.</Text>
      <Button
        mode="contained-tonal"
        onPress={handleBackPress}
        style={{margin: 20, padding: 5, borderRadius: 10}}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="file" size={20} style={{marginRight: 10}} />
          <Text style={{fontSize: 15}}>Go back to file page</Text>
        </View>
      </Button>
    </View>
  );
};

export default Viewer;
