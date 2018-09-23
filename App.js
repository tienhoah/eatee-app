import React from "react";
import {Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

// export default createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}