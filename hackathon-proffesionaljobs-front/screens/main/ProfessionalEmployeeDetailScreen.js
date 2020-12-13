import React, {useContext} from 'react';
import {Text, View ,StyleSheet, Linking, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native';


export default class ProfessionalEmployeeDetailScreen extends React.Component{

    state={
        employeeDetail:{
            id: 1,
            employeeName: "Agim Kryeziu",
            jobPosition: ".NET Developer",
            experienceLevel: "Junior",
            contact: "+38344625775",
            category: "DevOps",
            categoryId: 1,
            email: "elementuser03@gmail.com",
        },
    }

    render(){
       let { employeeDetail } = this.state
    return (
        <View style={{flex: 1}}>
          <ScrollView style={styles.container}>

            <View style={styles.wraperView}>
                {/* <View style={styles.centerView}>
                    <Text style={styles.titleText}>{jobDetail.name}</Text>
                </View> */}
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Employee Name: </Text>
                    <Text style={styles.mainText}>{employeeDetail.employeeName}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Job Position: </Text>
                    <Text style={styles.mainText}>{employeeDetail.jobPosition}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Level:</Text>
                    <Text style={styles.mainText}> {employeeDetail.experienceLevel} Developer</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Category:</Text>
                    <Text style={styles.mainText}> {employeeDetail.category}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15}}>
                <TouchableOpacity onPress={()=> Linking.openURL(`mailto:${employeeDetail.email}`)} style={{flex: 1, height: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', marginRight: 10, borderRadius: 15}}>
                    <Text style={{fontSize: 17, fontWeight: "500", color: 'white'}}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> Linking.openURL(`tel:${employeeDetail.contact}`)} style={{flex:1, height: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 15}}>
                    <Text style={{fontSize: 17, fontWeight: "500", color: 'white'}}>Call</Text>
                </TouchableOpacity>
            </View>
            
          </ScrollView>
        </View>

        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
    },
    wraperView: {
        flex: 1,
        borderWidth: 1, 
        borderColor: 'gray', 
        borderRadius: 15, 
        padding: 15, 
        margin: 15
    },
    centerView: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    titleText: {
        fontSize: 25, 
        fontWeight: 'bold',
        paddingTop: 10
    },
    rowView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
    boldText: {    
        fontSize: 18, 
        fontWeight: 'bold'
    },
    mainText: {
        fontSize: 14, 
        fontWeight: '500', 
        paddingTop: 3
    }
});