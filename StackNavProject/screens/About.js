import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const About = ({navigation}) => {
    return(
        <View>
            <Text>Welcome to Details Screen</Text>
            <Button
            title='Go to Home page'
            onPress={()=>navigation.navigate("Home")}
            />
            <Button
            title='Go to Details page'
            onPress={()=>navigation.navigate("Details")}
            />
        </View>
    )
}

export default About;