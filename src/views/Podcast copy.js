import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App(props) {
  const back = () => {
    props.navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttom} onPress={() => {
        back()
      }}>
        <Ionicons name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <ImageBackground source={props.route.params.cover} style={styles.backgroundImage}>
        <View style={styles.gradient}>
          <Text style={styles.title}>{props.route.params.title}</Text>
        </View>

      </ImageBackground> 
      
      <View style={{
        marginTop: 30,
        width: '100%',
        alignItems: 'center'
      }}>
        <View style={{
          width: '90%'
        }}>
          <Text style={styles.description}>
            {props.route.params.description}
          </Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808'
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
