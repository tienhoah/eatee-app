import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    axios.get('http://192.168.88.173:3001/api/users')
      .then((response) => {
        console.log(response.data);
        this.setState({
          isLoading: false,
          dataSource: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      })
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.first_name}, {item.last_name}</Text>}
          keyExtractor = {(item, index) => String(item.id)}
        />
      </View>
    );
  }
}
