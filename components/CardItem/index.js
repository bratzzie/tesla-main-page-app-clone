import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import Button from '../Button';

import styles from './styles'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}/>

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <Button type="primary" text={"Custom Order"} />
        <Button type="secondary" text={"Existing Inventory"} />
      </View>
    );
}

export default CarItem


//rnss