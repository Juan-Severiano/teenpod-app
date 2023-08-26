import React, { Component } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';

class PullToRefreshExample extends Component {
  state = {
    refreshing: false,
  };

  onRefresh = () => {
    // Coloque aqui a lógica para atualizar os dados
    this.setState({ refreshing: true });

    // Simulando uma chamada assíncrona (você deve substituir isso pelo seu próprio código)
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
        </ScrollView>
      </View>
    );
  }
}

export default PullToRefreshExample;