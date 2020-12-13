import React from 'react';
import { Image, ScrollView, Text, View, AsyncStorage, Modal, Platform } from 'react-native';
import RoundButton from '../../components/RoundButton';

export default function WelcomeScreen({navigation}) {
 
    

    return (
      <ScrollView  style={{backgroundColor: "#F6F7FD"}} bounces={false}>
        <View style={styles.container}>

          <View style={{paddingTop: 20}} />
          
            <View style={{alignItems: 'center', paddingTop: 80, paddingBottom: 120}}>
                <Text style={{fontSize: 23, fontWeight: "500", color: 'gray'}}>Professional Jobs</Text>
            </View>


         <View style={styles.buttonView}>
            <RoundButton label="Login" checked onPress={() => navigation.navigate('Login')} />
            <View style={{paddingRight: 10}} />
            <RoundButton label="Register" checked onPress={() => navigation.navigate('ChooseType')} />
        </View>
         </View>

      </ScrollView>
    )
}


const styles= {
    container: {
      backgroundColor: '#F6F7FD',
      paddingLeft: 20,
      paddingTop: 20,
      paddingRight: 20,
      height: "100%",
    },
    upperView:{
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30
    },
    buttonView: {
        flexDirection: 'row', 
        padding: 20
    },
    
}