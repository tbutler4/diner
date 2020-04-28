// import * as React from 'react';
import React, { useState } from "react";
import { Button, Picker, FlatList, StyleSheet,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
      <Text>Order screen</Text>
      <Button
        style={{ flex: 1, justifyContent: 'bottom'}}
        title="Click to Order"
        onPress={() => navigation.navigate('Views')}
      />
      <Picker
        selectedValue={selectedValue}
        style={{ flex: 1, justifyContent: 'center', height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Pinapple" value="Pinapple" />
        <Picker.Item label="Papaya" value="Papaya" />
        <Picker.Item label="Soursop" value="Soursop" />
        <Picker.Item label="Golden Apple'" value="Golden Apple'" />
        <Picker.Item label="Burro Banana" value="Burro Banana" />
        <Picker.Item label="Cocunut" value="Cocunut" />
        <Picker.Item label="Cocao" value="Cocao" />
        <Picker.Item label="Strawberry" value="Strawberry" />
        <Picker.Item label="Blueberry" value="Blueberry" />
        <Picker.Item label="Mango" value="Mango" />
      </Picker>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ViewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Views screen</Text>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Pinapple'},
            {key: 'Papaya'},
            {key: 'Soursop'},
            {key: 'Golden Apple'},
            {key: 'Burro Banana'},
            {key: 'Cocunut'},
            {key: 'Cocao'},
            {key: 'Strawberry'},
            {key: 'Blueberry'},
            {key: 'Mango'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Order" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const ViewsStack = createStackNavigator();

function ViewsStackScreen() {
  return (
    <ViewsStack.Navigator>
      <ViewsStack.Screen name="Views" component={ViewsScreen} />
      <ViewsStack.Screen name="Profile" component={DetailsScreen} />
    </ViewsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Order" component={HomeStackScreen} />
        <Tab.Screen name="Views" component={ViewsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
