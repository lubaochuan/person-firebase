import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, setFirstName, setLastName, watchPersonData } from './../redux/app-redux';

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
    setFirstName: (text) => { dispatch(setFirstName(text)) },
    setLastName: (text) => { dispatch(setLastName(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      favoriteAnimal: props.favoriteAnimal,
      firstName: props.personData.firstName,
      lastName: props.personData.lastName,
    }

    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  }

  onSetFirstNamePress = () => {
    this.props.setFirstName(this.state.firstName);
  }

  onSetLastNamePress = () => {
    this.props.setLastName(this.state.lastName);
  }

  render() {
    return (
      <View style={{paddingTop:20}}>
        <Button title="Signout" onPress={this.onSignoutPress} />

        <Text>{this.props.favoriteAnimal}</Text>
        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.favoriteAnimal}
          onChangeText={(text) => { this.setState({favoriteAnimal: text}) }}
        />
        <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />

        <Text>{this.props.personData.firstName}</Text>
        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.firstName}
          onChangeText={(text) => { this.setState({firstName: text}) }}
        />
        <Button title="Set First Name" onPress={this.onSetFirstNamePress} />

        <Text>{this.props.personData.lastName}</Text>
        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.lastName}
          onChangeText={(text) => { this.setState({lastName: text}) }}
        />
        <Button title="Set Last Name" onPress={this.onSetLastNamePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);
