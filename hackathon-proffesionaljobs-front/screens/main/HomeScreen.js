import * as React from 'react';
import { Button, Platform, StyleSheet, Alert, AsyncStorage, View, Linking, Modal, TouchableOpacity, Text } from 'react-native';



export default class HomeScreen extends React.Component {
 

  state={
    type:""
  }
  async componentDidMount(){
    if(await AsyncStorage.getItem("type") == "employee"){
      this.setState({type: "employee"})
    }else if (await AsyncStorage.getItem("type") == "employeer"){
      this.setState({type: "employeer"})
    }
  }
 
      render(){

        return (

              <View style={{flex: 1}}>
                {/* <Button title="Inside" onPress={()=>this.props.navigation.navigate('Inside')}/> */}
                {this.state.type == "employee" && <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfessionalJobs')} style={{flex: 1, height: "50%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
                  <Text style={{fontSize: 25, fontWeight: "600", color: "white"}}>Professional Jobs</Text>
                </TouchableOpacity>}
                {this.state.type == "employeer" && <TouchableOpacity  onPress={()=> this.props.navigation.navigate('ProfessionalEmployees')} style={{flex: 1, height: "50%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
                  <Text style={{fontSize: 25, fontWeight: "600", color: "white"}}>Professional Employees</Text>
                </TouchableOpacity>}
                {this.state.type == "employeer" && <TouchableOpacity  onPress={()=> this.props.navigation.navigate('AddJob')} style={{flex: 1, height: "50%", justifyContent: 'center', alignItems: 'center', backgroundColor: '#bdbdbd'}}>
                  <Text style={{fontSize: 25, fontWeight: "600", color: "white"}}>Add Job</Text>
                </TouchableOpacity>}
              </View>
        
          )
        }
      }
    
    
    
    





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FD',
    paddingBottom: 30
  },
  contentContainer:{
    backgroundColor: '#F6F7FD',
  },
  row:{
    flexDirection: 'row',
    paddingBottom: 20
  },
  layer:{
    alignItems: 'center',
    justifyContent:'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  wrapper:{
    backgroundColor: '#F6F7FD',
    flex: 1
  },
  content:{
    paddingTop: 30,
    paddingRight: 35, 
    paddingLeft: 35, 
    alignItems: 'center'
  },
  close: {
    fontSize: 20, 
    marginTop: 30,
    marginLeft: 20, 
    color: 'red'
  }
});
