import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider'

const PodcastPlayer = (props) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);

  const back = () => {
    props.navigation.navigate('Home');
  }

  useEffect(() => {
    async function loadAudio() {
      const { sound } = await Audio.Sound.createAsync({ uri: props.route.params.audio });
      setSound(sound);

      const { durationMillis } = await sound.getStatusAsync();
      setDuration(durationMillis);
    }

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [props]);

  const togglePlayback = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updatePosition = async () => {
      if (!sound) return;

      const { positionMillis } = await sound.getStatusAsync();
      setPosition(positionMillis);
    };

    const interval = setInterval(updatePosition, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [sound]);

  const getFormattedTime = (millis) => {
    if (millis === null) return '--:--';

    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <TouchableOpacity style={styles.buttom} onPress={() => {
        back()
      }}>
        <Ionicons name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: props.route.params.cover }} style={styles.backgroundImage} />
        <Text style={styles.title}>{props.route.params.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={styles.time}>
            {getFormattedTime(position)}
          </Text>
          <Slider
            style={styles.slider}
            value={position}
            maximumValue={duration}
            minimumTrackTintColor="#12C2E9"
            thumbTintColor="#12C2E9"
            disabled={!sound}
          />
          <Text style={styles.time}>
            {getFormattedTime(duration)}
          </Text>
        </View>
        <TouchableOpacity onPress={togglePlayback} style={styles.playButton}>
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={30} color='#fff' />
        </TouchableOpacity>
        <View style={{
          marginTop: 30,
          width: '100%',
          alignItems: 'center'
        }}>
          <ScrollView style={{
            width: '90%'
          }}>
            <Text style={styles.description}>
              {props.route.params.description}
            </Text>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
  
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: '#080808',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center'
  },
  thumbnail: {
    marginBottom: 16,
  },
  slider: {
    width: '80%',
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 1.25,
    height: Dimensions.get('window').width / 1.25,
    marginBottom: 16,
    borderRadius: 20,
    marginTop: 100
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    marginLeft: 20
  },
  time: {
    marginBottom: 8,
    color: 'white',
  },
  playButton: {
    backgroundColor: '#FF32AF',
    paddingVertical: 13,
    paddingHorizontal: 16,
    width: 60,
    height: 60,
    borderRadius: 70,
  },
  playButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: '#cecece',
    fontSize: 16,
  },
  buttom: {
    padding: 10,
    backgroundColor: '#0001',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
    position: 'absolute',
    zIndex: 5
  },
});

export default PodcastPlayer;