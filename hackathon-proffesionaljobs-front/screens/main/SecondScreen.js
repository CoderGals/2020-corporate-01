import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class SecondScreen extends React.Component {

  render(){
    return (
      <View style={{flex: 1, backgroundColor:"#F6F7FD"}}>
          <ScrollView style={styles.container}>
            <View style={{paddingTop: 70}} />
            </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FD',
    paddingTop: 30,
  },
  upper:{
    flexDirection: 'row',
    paddingTop: 38,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header:{
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#707070",
  }
})

