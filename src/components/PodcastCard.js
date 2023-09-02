import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

export default props => {
  return (
    <>
      <Image style={{
        width: Dimensions.get('window').width / 2.4,
        height: Dimensions.get('window').width / 2.4,
        borderRadius: 15,
      }} source={{ uri: props.item.cover }} />
      <View style={{
        paddingVertical: 10
      }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>{props.item.title}</Text>
        <Text style={{ color: '#cecece', fontSize: 12 }}>{props.item.description}</Text>
      </View>
      </>
    )
}