import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import Button from '../Button';

import styles from './styles'

const CarItem = ({name, tagLine, image, tagLineCTA}) => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground source={image}
        style={styles.image}/>

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagLine} {" "}
          
          <Text style={styles.tagLineCTA}>
            {tagLineCTA}
          </Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button type="primary" text={"Custom Order"} />
          <Button type="secondary" text={"Existing Inventory"} />
        </View>

        </View>
    );
}

export default CarItem


//rnss