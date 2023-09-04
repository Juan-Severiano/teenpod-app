import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Sound from 'react-native-sound';

export default function AudioPicker() {
  const [audioUri, setAudioUri] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Inicialize o DocumentPicker
    (async () => {
      await DocumentPicker.getDocumentAsync({});
    })();
  }, []);

  const pickAudio = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/mpeg', // Especifica o tipo MIME para arquivos .mp3
      });

      if (result.type === 'success') {
        setAudioUri(result.uri);
        const sound = new Sound(result.uri, null, (error) => {
          if (error) {
            console.error('Erro ao carregar o arquivo de áudio:', error);
          } else {
            setSound(sound);
          }
        });
      } else {
        setAudioUri(null);
      }
    } catch (error) {
      console.error('Erro ao selecionar o arquivo de áudio:', error);
    }
  };

  const playAudio = () => {
    if (sound) {
      sound.play((success) => {
        if (!success) {
          console.error('Erro ao reproduzir o áudio');
        }
      });
    }
  };

  return (
    <View>
      <Button title="Escolher Áudio .mp3" onPress={pickAudio} />
      {audioUri && <Text>Arquivo de Áudio Selecionado: {audioUri}</Text>}
      <Button title="Reproduzir Áudio" onPress={playAudio} />
    </View>
  );
}

sendPodcast = async () => {
  console.log('iniciando o add');

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    title: this.state.title,
    description: this.state.description,
  };

  try {
    const response = await axios.post(
      'https://teenpod.pythonanywhere.com/api/podcast/',
      data,
      { headers }
    );

    console.log('STATUS Login', response.status);
    console.log(response.data);

    if (response.status === 200) {
      this.props.navigation.navigate('Index', { access: response.data.access });
    } else if (response.status === 400 || response.status === 401) {
      this.setState({ showError: true });
      const errors = [];
      response.data.username ? errors.push(`Email: ${response.data.username}`) : null;
      response.data.password ? errors.push(`Senha: ${response.data.password}`) : null;
      response.data.detail ? errors.push(`Erro: ${response.data.detail}`) : null;
      console.log(errors);
      this.setState({ errors });
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}
