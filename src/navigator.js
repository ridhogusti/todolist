import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { View, Text } from "react-native";

// import screens

import exampleScreen from "./screens/Example";
import formScreen from "./screens/Example/Form";

const defaultNavigationOptions = { header: null };

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Example: { screen: exampleScreen },
    Create: { screen: formScreen },
    Edit: { screen: formScreen }
  },
  {
    initialRouteName: "Example",
    navigationOptions: defaultNavigationOptions
  }
);

export default createAppContainer(AppNavigator);
