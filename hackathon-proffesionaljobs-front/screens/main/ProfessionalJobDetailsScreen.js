import React, {useContext} from 'react';
import {Text, View ,StyleSheet, Linking, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native';


export default class ProfessionalJobDetailsScreen extends React.Component{

    state={
        jobDetail:{
            id: 1,
            companyName: "ICK",
            employeerName: "Agron Sadiku",
            jobTitle: "Full Stack",
            jobDescription: "We need a frontend developer for our e commerce project we need to finish it for 2 months",
            contact: "+38344621235",
            email: "voltisjakupi@gmail.com",
            category: "Software Engineer",
            categoryId: 2,
            salary: 100000,//for companies
        },
    }

    render(){
       let { jobDetail } = this.state
    return (
        <View style={{flex: 1}}>
          <ScrollView style={styles.container}>

            <View style={styles.wraperView}>
                {/* <View style={styles.centerView}>
                    <Text style={styles.titleText}>{jobDetail.name}</Text>
                </View> */}
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Company Name: </Text>
                    <Text style={styles.mainText}>{jobDetail.companyName}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Job Name: </Text>
                    <Text style={styles.mainText}>{jobDetail.employeerName}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Job Title:</Text>
                    <Text style={styles.mainText}> {jobDetail.jobTitle}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.boldText}>Category:</Text>
                    <Text style={styles.mainText}> {jobDetail.category}</Text>
                </View>
                
                <View style={{ paddingTop: 10}}>
                    <Text style={styles.boldText}>Description: </Text>
                    <Text style={styles.mainText}>{jobDetail.jobDescription}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15}}>
                <TouchableOpacity onPress={()=> Linking.openURL(`mailto:${jobDetail.email}`)} style={{flex: 1, height: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', marginRight: 10, borderRadius: 15}}>
                    <Text style={{fontSize: 17, fontWeight: "500", color: 'white'}}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> Linking.openURL(`tel:${jobDetail.contact}`)} style={{flex:1, height: 42, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 15}}>
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