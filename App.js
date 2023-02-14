import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import { Platform } from 'react-native';
import { TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import PreparingScreen from './screens/PreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator
       screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen 
         name="Basket" component={BasketScreen}
         options={{presentation: "transparentModal", headerShown: false}}
        />
        <Stack.Screen 
         name="Preparing" component={PreparingScreen}
         options={{presentation: "fullScreenModal", headerShown: false}}
        />
        <Stack.Screen 
         name="Delivery" component={DeliveryScreen}
         options={{presentation: "fullScreenModal", headerShown: false}}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}