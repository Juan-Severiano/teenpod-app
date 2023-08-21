import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = ({ audioUri }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUri }
    );
    setSound(sound);
    await sound.playAsync(); // Inicia a reprodução do áudio.
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync(); // Descarrega o áudio ao desmontar o componente.
      }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Reproduzir Áudio" onPress={playSound} />
    </View>
  );
};

export default AudioPlayer;