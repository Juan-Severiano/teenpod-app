import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image, ScrollView, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import axios from 'axios'


export default function Home(props) {
  const [msg, setMsg] = useState('Bom dia')
  const [refreshing, setRefreshing] = useState(false)
  const [podcasts, setPodcasts] = useState([])

  const getMessageHour = () => {
    const date = new Date().getHours()
    setRefreshing(true)
    if (date < 12) {
      setMsg('Bom dia')
    } else if (13 < date < 18) {
      setMsg('Boa tarde')
    } else {
      setMsg('Boa noite')
    }
    setTimeout(() => {
      setRefreshing(false)
    }, 1000);
    console.log(props.route.params)
    // conect()
  }

  conect = async () => {
    setRefreshing(true)
    console.clear();

    const headers = {
      Authorization: `Bearer ${props.navigation.state.params.access}`,
    };

    const config = {
      headers: headers,
    };

    try {
      const response = await axios.get(
        'https://teenpod.onrender.com/api/podcast/',
        config
      );

      console.log('STATUS home', response.status);

      setPodcasts(response.data.results)
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
    setTimeout(() => {
      setRefreshing(false)
    }, 1000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableOpacity style={{ width: '90%', marginBottom: 10 }} onPress={() => { getMessageHour() }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>{msg}</Text>
        </TouchableOpacity>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getMessageHour}
            />
          }
          contentContainerStyle={{ width: '100%', paddingHorizontal: 10 }}
          data={podcasts}
          numColumns={2}
          keyExtractor={item => `${item.id}`}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => {
            return <PodcastCard id={item.id} {...item} navigation={props.navigation} />
          }
          }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center'
  },
})
