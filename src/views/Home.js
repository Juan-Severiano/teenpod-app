import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import podcasts from '../../podcasts';


export default function Home(props) {
  console.log(props.navigation)
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ width: '90%', marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>Boa Noite</Text>
      </View>
      <FlatList
        contentContainerStyle={{ width: '100%', paddingHorizontal: 10 }}
        data={podcasts}
        numColumns={2}
        keyExtractor={item => item.id}
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
