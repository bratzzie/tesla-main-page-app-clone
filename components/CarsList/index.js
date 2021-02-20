import React from 'react'
import { View, FlatList, Dimensions} from 'react-native'

import styles from './styles'
import cars from './Cars'
import CarItem from '../CardItem'

const CarsList = () => {
    return (
     <View style={styles.CarsContainer}> 
         <FlatList 
         data={cars} 
         renderItem={({item}) => <CarItem car={item} />}
         keyExtractor={(item, index) => index.toString()}
         showsVerticalScrollIndicator={false}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}
         />
     </View>
    )
}

export default CarsList
