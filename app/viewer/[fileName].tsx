import {View, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {useLocalSearchParams, useNavigation} from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import {ResizeMode, Video} from 'expo-av';

const Viewer = () => {
  const {fileName} = useLocalSearchParams<{fileName: string}>();
  const navigation = useNavigation();
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const handleBackPress = () => {
    navigation.goBack();
  };

  // TODO - Use Hash instead of file name
  return (
    <View>
      <Text>{fileName} is being viewed.</Text>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri:
              'http://64.176.201.168:5000/video?fileName=' +
              encodeURI(fileName), // TESTING SERVER ONLY
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          shouldPlay={true}
        />
      </View>
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

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    aspectRatio: 16 / 9,
    width: '100%',
  },
});

export default Viewer;
