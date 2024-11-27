import { AboutStackNavigator } from "./StackNavigator2";
import BottomTabNavigator from "./TabNavigation";
import { createDrawerNavigator } from "./TabNavigation";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name="Home" component={AboutStackNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;