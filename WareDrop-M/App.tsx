import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./Login";


export const Stack = createNativeStackNavigator();
export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login"
                    component={Login}
                    options={{title:'Welcome'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
