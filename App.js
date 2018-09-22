import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import axios from "axios";

const authToken =
  "Bearer JIba6FRPuS1u8_G-7HeYFxOEn1hP8OiBz8SNySU0VlWpzKY8hx0E9hJulfTId43tLaDk-0inreQzymHn54GF5wGULtbEUy8yggF0564R5ESptLfg4X9m_mA0FJ6mW3Yx";
const config = {
  headers: {
    Authorization: authToken
  },
  params: {
    term: "tacos",
    location: "main 123st"
  }
};

export default class App extends React.Component {
  componentWillMount() {
    axios
      .get("https://api.yelp.com/v3/businesses/search", config)
      .then(response => console.log(response.data.businesses))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text> My first yelp authentication request </Text>
      </View>
    );
  }
}

// export default class FetchExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true };
//   }

//   componentDidMount() {
//     const testUrl = "https://facebook.github.io/react-native/movies.json";
//     return (
//       axios
//         .get(testUrl)
//         // .then(response => console.log(response.data.movies));
//         .then(responseJson => {
//           this.setState(
//             {
//               isLoading: false,
//               dataSource: responseJson.data.movies
//             },
//             function() {}
//           );
//         })
//         .catch(function(error) {
//           console.log(error);
//         })
//     );
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={{ flex: 1, paddingTop: 20 }}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//           keyExtractor={({ id }, index) => id}
//         />
//       </View>
//     );
//   }
// }
