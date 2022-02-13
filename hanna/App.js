import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from './src/home/home';
import { Settings } from './src/settings/settings';
import { NavigationContainer } from '@react-navigation/native';
import { Apps } from './src/apps/apps';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{
        backgroundColor : "#D9D9D9"
      }} barStyle={styles.bar}>
        <Tab.Screen name="Apps" component={Apps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bar : {
    borderRadius:45,
    backgroundColor : "#FFF",
    overflow:'hidden',
    left: 0,
    bottom: 0,
    right: 0,
    padding:5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
