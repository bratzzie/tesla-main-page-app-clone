import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CardItem';

export default function App() {
  return (
    <View style={styles.container}>
    
     <CarItem 
     name={"Model X"}
     tagLine={"Order Online For"}
     image={require('./assets/images/ModelX.jpeg')}
     tagLineCTA={"Touchless Delivery"}/>
    
    
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
