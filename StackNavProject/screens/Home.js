import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Home = () => {
    return(
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button
            title='Go to About page'
            onPress={()=>navigation.navigate("About")}
            />
            <Button
            title='Go to Details page'
            onPress={()=>navigation.navigate("Details")}
            />
        </View> 
    )
}

export default Home;