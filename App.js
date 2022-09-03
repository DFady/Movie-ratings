import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddScreen from './component/AjouterFilm';
import Accueil from "./component/Accueil";
import Details from "./component/LesDetails";
//import Connexion from "./component/Connexion";
import API from "./component/API";
import Connexion from "./component/Connexion";
//import Accueil from "./component/Accueil";




const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen name="Se connecter" component={Connexion} />
        <Stack.Screen name="Acccueil" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const Main = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Accueil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "Accueil") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Ajouter un film") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name == "les détails du film") {
            iconName = focused ? "eye-sharp" : "eye-outline";
          } else if (route.name == "api") {
            iconName = focused ? "globe" : "globe-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tabs.Screen name="Home" component={Accueil} initialParams={{ addFilm: null }} />
      <Tabs.Screen
        name="Ajouter un film"
        component={AddScreen}
      />
      <Tabs.Screen
        name="Les détails du film"
        component={Details}
      />
      <Tabs.Screen
        name="api"
        component={API}>

      </Tabs.Screen>
    </Tabs.Navigator>
  );

}



export default App;