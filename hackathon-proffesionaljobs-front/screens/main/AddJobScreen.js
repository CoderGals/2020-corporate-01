import React, {useContext} from 'react';
import {Text, View ,StyleSheet, Image, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native';
import Input from '../../components/Input'
import {CheckBox, Button} from 'react-native-elements'

export default class AddJobScreen extends React.Component{

  state={
    jobTitle: '',
    companyName: '',
    category: '',
    jobDescription:'',
    contact: '',
    email: ''

  }

    render(){
    
    return (
        <View style={{backgroundColor: '#F6F7FD', flex: 1}}>


        <ScrollView style={styles.container}>
        
        <Input
            placeholder="Company Name*"
            autoFocus={true}
            value={this.state.companyName}
            onChange={(companyName) => this.setState({companyName})}
            autoFocus={true}
            image={require('../../assets/images/man.png')}
          />

          <Input
            placeholder="Job Title*"
            autoFocus={true}
            value={this.state.jobTitle}
            onChange={(jobTitle) => this.setState({jobTitle})}
            autoFocus={true}
            image={require('../../assets/images/man.png')}
          />

          <Input
            placeholder="Category*"
            autoFocus={true}
            value={this.state.category}
            onChange={(category) => this.setState({category})}
            autoFocus={true}
            image={require('../../assets/images/emailicon.png')}
          />

          <Input
            placeholder="Contact*"
            autoFocus={true}
            value={this.state.contact}
            onChange={(contact) => this.setState({contact})}
            autoFocus={true}
            image={require('../../assets/images/emailicon.png')}
          />

<Input
            placeholder="Email*"
            autoFocus={true}
            value={this.state.email}
            onChange={(email) => this.setState({email})}
            autoFocus={true}
            image={require('../../assets/images/emailicon.png')}
          />


          <Button
            titleStyle={{color:"#EBEBEB"}} 
            buttonStyle={{height: 53 ,borderRadius: 17}} 
            containerStyle={{paddingLeft: 80, paddingRight: 80, paddingTop: 40}} 
            title="Add" 
            onPress={() => logIn()}
          />

            
        </ScrollView>

        </View>

        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FD', 
        paddingLeft: 10,
        paddingRight: 10
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
  
  });
  