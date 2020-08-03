import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FacebookScreen extends React.Component {
    render(){
        return(
                
                <View style={styles.container}>
                <Text style={styles.textfb}>Facebook</Text>
            
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfb: {
    color:'blue',
    fontWeight:"500",
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 

})