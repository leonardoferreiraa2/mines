import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress}
          style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    //backgroundColor: '#999',
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,

    // color: 'rgba(1, 100,119,145)',
    // borderColor: 'rgba(1, 100,119,145)',
    color: '#1f1f1f',
    borderColor: '#1f1f1f',
    
    borderRadius: 10,
    borderWidth: 1,
  }
})