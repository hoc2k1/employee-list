import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';
import EmployeeMaster from './app/EmployeeMaster';

const {width} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: "https://vn-test-11.slatic.net/p/f714a39f67e2232932db58f039ca8379.jpg"}}>
          <Text style={styles.headText}>Employee List</Text>
        </ImageBackground>
        <View style={styles.row}>
          <Text style={{ ...styles.rowText, borderRightWidth: 0.5, borderRightColor: 'black' }}>Full Name</Text>
          <Text style={styles.rowText}>Email</Text>
        </View>
        <EmployeeMaster />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  row: {
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'green'
  },

  rowText: {
    padding: 10,
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },

  image: {
    width: width,
    height: 150,
  },

  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});
