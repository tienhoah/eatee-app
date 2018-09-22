import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import axios from "axios";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const testUrl = "https://facebook.github.io/react-native/movies.json";

    return (
      axios
        .get(testUrl)
        // .then(response => console.log(response.data.movies));

        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson.data.movies
            },
            function() {}
          );
        })
        .catch(function(error) {
          console.log(error);
        })
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
