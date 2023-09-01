import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

export default props => {
  return (
    <TouchableOpacity style={{
      width: Dimensions.get('window').width / 2.4,
      height: (Dimensions.get('window').width / 2.4) + 10,
      justifyContent: 'flex-start',
      margin: 10,
      marginVertical: 30
    }}
      onPress={() => {
        props.navigation.navigate('Podcast', { ...props })
        console.log(props.navigation)
      }}
    >
      <Image style={{
        width: Dimensions.get('window').width / 2.4,
        height: Dimensions.get('window').width / 2.4,
        borderRadius: 15,
      }} source={props.cover} />
      <View style={{
        paddingVertical: 10
      }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>{props.title}</Text>
        <Text style={{ color: '#cecece', fontSize: 12 }}>{props.description}</Text>
      </View>
    </TouchableOpacity>

  )
}