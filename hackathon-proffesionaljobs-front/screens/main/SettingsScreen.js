import React, {useContext, useState} from 'react';
import {View ,StyleSheet, Image, Text, AsyncStorage, Alert, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../context/index.js'
import {Button} from 'react-native-elements'

export default function SettingsScreen(props){
  const { signOut } =useContext(AuthContext);
  let [isEnabled, setIsEnabled] = useState(false)

  const logOut = async () => {
    Alert.alert(
      'Are you sure you want to log out?',
      '',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: async () => {
          await AsyncStorage.removeItem("userToken")
          signOut()
       }}
      ],
      { cancelable: false }
    )
  }


  return (
    <View style={{backgroundColor: '#F6F7FD', flex: 1}}>
          <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
            <Image style={{width: 150, height: 100, resizeMode: 'contain'}} source={require('../../assets/images/person.png')} />
            <Text style={{fontWeight: "500", color: "gray",  fontSize: 19, paddingBottom: 10, paddingTop: 10}}>Voltis Jakupi</Text>
            <Text style={{fontWeight: "500", color: "gray",fontSize: 14, paddingBottom: 10}}>voltisjakupi@gmail.com</Text>
            <Text style={{fontWeight: "500", color: "gray", fontSize: 14}}>20/02/1982</Text>
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate('Comments')} style={styles.contractView}>
            <Text style={styles.titleText}>Comments</Text>
            <Image style={{width: 21, height: 21, tintColor: 'grey'}} source={require('../../assets/images/rightarrow.png')} />
          </TouchableOpacity>


          <Button 
            title="Log out" 
            containerStyle={{paddingLeft: 80, paddingRight: 80, paddingBottom: 40, paddingTop: 200}} 
            buttonStyle={{borderRadius: 25 , borderWidth: 1, borderColor: '#FF5959', backgroundColor: '#DCDCDC'}} 
            titleStyle={{color: '#FF5959'}}
            onPress={()=> logOut()}
          />
 
    </View>
  
  )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F7FD', 
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
    },
    titleText: {
      fontWeight: "500",
      fontStyle: 'normal',
      color: 'gray',
      fontSize:  17
    },
    switchView: {
      flexDirection: 'row',
      marginLeft: 30, 
      marginTop: 20, 
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    contractView: {
      flexDirection: 'row',
      marginLeft: 30, 
      marginRight: 30, 
      marginTop: 40, 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }
  });
  
  