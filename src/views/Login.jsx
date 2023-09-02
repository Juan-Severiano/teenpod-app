import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    showError: false,
    errors: []
  }

  login = async () => {
    console.log('asdasdasdasd');

    const headers = {
      'Content-Type': 'application/json',
    };

    // const data = {
    //   username: this.state.email,
    //   password: this.state.password,
    // };

    const data = {
      username: 'admin',
      password: 'asd',
    };

    try {
      const response = await axios.post(
        'https://teenpod.onrender.com/api/token/',
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder='Insira seu Email aqui'
          style={styles.input}
          autoFocus={true}
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder='Insira sua Senha Aqui'
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        {this.state.showError ?
          <View style={styles.buttomError}>
            <FlatList
              data={this.state.errors}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item }) => {
                return <Text style={styles.buttomTextError}><Ionicons name='close' size={20} />{item}</Text>
              }} /></View> : null}
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Entrar  <Ionicons name='send' size={20} color='#fff' /></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://academytaskhub.pythonanywhere.com/auth/register/')}
          style={styles.buttom} >
          <Text style={styles.buttomText}>Criar nova conta ...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    color: '#343a40',
    width: '80%',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#0068d9',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomError: {
    marginTop: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: '#dc3545',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomTextError: {
    fontSize: 10,
    color: '#dc3545',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
})