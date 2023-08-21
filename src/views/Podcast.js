import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App({ route }) {
  const videoId = "YZbGhW3Gc-4";
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('../../podcast.png')} style={styles.backgroundImage}>
        <View style={styles.gradient}>
          <Text style={styles.title}>Titulo do podcast aqui babys</Text>
        </View>

      </ImageBackground> */}

      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        allowsFullscreenVideo={true}
        style={{ width: '100%', maxHeight: 280 }}
      />
      
      {/* <View style={{
        marginTop: 30,
        width: '80%'
      }}>
        <Text style={styles.description}>
          uma descrição muito louca
        </Text>
      </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center'
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: '100%',
    height: Dimensions.get('window').height / 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    marginLeft: 20
  },
  slider: {
    width: '80%',
    marginTop: 20,
  },
  playButton: {
    backgroundColor: '#1DB954',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  playButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#cecece', 
    fontSize: 16,
  }
})
