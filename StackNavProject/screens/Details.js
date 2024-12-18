import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Details = ({navigation}) => {
    return(
        <View>
            <Text>Welcome to Details Screen</Text>
            <Button
            title='Go to the other page'
            onPress={()=>navigation.navigate("Home")}
            />
        </View>
    )
}

export default Details;