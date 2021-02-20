import React from 'react'
import { Pressable, Text, View } from 'react-native'

import styles from './styles'

const Button = ({type, text}) => {

    const bgColor = type === 'primary' ? '#171A20CC' : "#FFFFFFA6";
    const textColor = type === 'primary' ? '#FFF' : '#171A20';

    return (
        <View style={styles.buttonContainer} >
            <Pressable
            style={[styles.button, {backgroundColor: bgColor}]}
            onPress={() => {
                console.log("Hello World");
            }}>
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </Pressable>

        </View>
    )
}

export default Button
