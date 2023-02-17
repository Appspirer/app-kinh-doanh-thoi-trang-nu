import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Categories, DrawerContent } from '../screens';
import { Dimensions } from 'react-native'

var { height, width } = Dimensions.get('window')

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerType: 'front', drawerStyle: { width: width, backgroundColor:'rgba(0,0,0,0.75)' } }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}