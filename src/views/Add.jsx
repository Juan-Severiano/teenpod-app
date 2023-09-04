import React, { Component } from 'react';
import { View, Button, ImageBackground } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios'

export default class Add extends Component {
  state = {
    audioUri: null,
    sound: null,
    audioFile: null,
  };

  pickAudio = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/mpeg',
      });

      if (result.type === 'success') {
        const audioFile = await FileSystem.downloadAsync(
          result.uri,
          FileSystem.cacheDirectory + 'audio.mp3'
        );

        this.setState({ audioUri: audioFile.uri });

        const { sound } = await Audio.Sound.createAsync(
          { uri: audioFile.uri }
        );
        this.setState({ sound });
      } else {
        this.setState({ audioUri: null });
      }
    } catch (error) {
      console.error('Erro ao selecionar o arquivo de áudio:', error);
    }
  };

  sendPodcast = async () => {
    console.log('iniciando o add');

    const headers = {
      Authorization: `Bearer ${this.props.route.params.access}`,
    };

    const data = {
      cover: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'this.state.title',
      description: 'this.state.description',
      audio: this.state.audioFile,
      author: 1
    };
    const config = {
      headers: headers,
      body: data
    };


    try {
      const response = await axios.post(
        'https://teenpod.pythonanywhere.com/api/podcast/',
        config
      );

      console.log('STATUS Login', response.status);
      console.log(response.data);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/TeenPod-AuthPage.png')}
        style={styles.container}
      >
        <Button title="Escolher Áudio .mp3" onPress={() => this.pickAudio()} />
        <Button title="Enviar Áudio para API" onPress={() => this.sendPodcast()} />
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};