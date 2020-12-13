import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'


export default function EmployeeCard({ employeeName, category, jobPosition, experienceLevel,  onPress }) {
  
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.boxView}>
        <View style={styles.rowView}>
            <View>
                <Text style={styles.nameText}>Employee Name: {employeeName}</Text>
                <Text style={styles.dateTimeText}>Job Position: {jobPosition}</Text>
                <Text style={styles.dateTimeText}>Category: {category}</Text>
                <Text style={styles.dateTimeText}>Level: {experienceLevel} Developer</Text>
                <Text style={styles.locationText}>Tap to read more...</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    boxView:{
      flex: 1,
      borderColor: 'lightgray',
      borderWidth: 1.2,
      borderRadius: 15,
      paddingBottom: 10,
      marginBottom: 20,
      marginRight: 15,
      marginLeft: 15
    },
    rowView:{
        flexDirection: 'row', 
        paddingTop: 10, 
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    nameText:{
        fontSize: 17, 
        fontWeight: "bold", 
        paddingBottom: 5
    },
    dateTimeText:{
        fontSize: 13, 
        fontWeight: "500",
        color: '#686868',
        paddingBottom: 5
    },
    locationText:{
        fontSize: 12, 
        fontWeight: "500",
        color: 'black'
    }
  })