import React, {useContext} from 'react';
import {Text, View ,StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import EmployeeCard from '../../components/EmployeeCard';
import ListItem from '../../components/ListItem';
import {Button} from 'react-native-elements'
import Modal from 'react-native-modal';
import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['employeeName', 'jobPosition', 'experienceLevel'];

export default class ProffesionalEmployeesScreen extends React.Component{


    state={
        showFilterModal: false,
        searchTerm: '',
        employees:[
            {
                id: 1,
                employeeName: "Voltis Jakupi",
                jobPosition: "Backend Developer",
                contact: "+38344625775",
                experienceLevel: "Intermediate",
                category: "Software Engineer",
                categoryId: 2,
                email: "voltisjakupi@gmail.com",
            },
            {
                id: 2,
                employeeName: "Dibran Hoxha",
                jobPosition: "FrontEnd Developer",
                experienceLevel: "Senior",
                contact: "+38344625775",
                category: "DevOps",
                categoryId: 1,
                email: "voltisjakupi@gmail.com",
            },
            {
                id: 3,
                employeeName: "Agim Kryeziu",
                jobPosition: ".NET Developer",
                experienceLevel: "Junior",
                contact: "+38344625775",
                category: "DevOps",
                categoryId: 1,
                email: "voltisjakupi@gmail.com",
            },
           
           
        ]
    }

    componentDidMount(){
        this.setState({unFilteredArray: this.state.employees})
    }

    filterData = (item) => {
            let filter= this.state.unFilteredArray?.filter(x => x.categoryId == item)
            this.setState({showFilterModal: false, employees: filter})      
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

    showFilterModal = () => {
        return (
            <Modal isVisible={this.state.showFilterModal} animationType="fade" hasBackdrop={true} backdropColor={"rgba(220,220,220, 0.9)"}>
                <View style={{borderRadius: 10, backgroundColor: 'white'}}> 
                        <SearchInput 
                            onChangeText={(term) => { this.searchUpdated(term) }} 
                            style={styles.searchInput}
                            placeholder="Type a message to search"
                            />
                        {/* <ListItem label={"DevOps"} filter={true} onPress={()=>this.setState({campaigns: this.state.unFilteredArray, showFilterModal:false})} key={`1`} /> */}
                        <ListItem filter={true} label={"Software Engineer"} onPress={() => this.filterData(2)} />
                        <ListItem filter={true} label={"DevOps"} onPress={() => this.filterData(1)} />
                        <ListItem filter={true} label={"Project Manager"} onPress={() => this.filterData(3)} />
                        <ListItem filter={true} label={"All"} onPress={() => this.setState({employees: this.state.unFilteredArray, showFilterModal:false})} />
                        <View style={styles.buttonsView}>
                            <TouchableOpacity onPress={()=>this.setState({showFilterModal:false})}>
                                <Text style={[styles.filterText, {color:'red'}]}>Close</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Modal>
    )
        
    }

    


    showJobs = () => {
        return this.state.employees?.map(x => {
            return <EmployeeCard
                        category={x.category}
                        experienceLevel={x.experienceLevel}
                        employeeName={x.employeeName}
                        jobPosition={x.jobPosition} 
                        onPress={()=>this.props.navigation.navigate('ProfessionalEmployeeDetail')}
                    />
        })
    }

    render(){
        const filteredEmails = this.state.employees?.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
        <View style={{backgroundColor: '#F6F7FD', flex: 1}}>
            <View style={{flexDirection: 'row', borderColor: 'lightgray', borderWidth: 1, justifyContent: 'space-between'}}>
            <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
                <TouchableOpacity 
                        onPress={()=>this.setState({showFilterModal: true})}
                        style={[styles.iconsStyle, {borderColor: 'black', borderWidth: 0.5, marginRight: 10}]}
                    >
                        <Image 
                            source={require('../../assets/images/filtericon.png')}
                            resizeMode="contain" 
                            style={styles.filterIconStyle}
                        />
                    </TouchableOpacity>  
            </View>

        <ScrollView style={styles.container}>
        
        {this.state.showFilterModal && this.showFilterModal()}
        {/* {this.showJobs()} */}
        {filteredEmails?.map(x => {
            return <EmployeeCard
                        category={x.category}
                        experienceLevel={x.experienceLevel}
                        employeeName={x.employeeName}
                        jobPosition={x.jobPosition} 
                        onPress={()=>this.props.navigation.navigate('ProfessionalEmployeeDetail')}
                    />
        })}
        </ScrollView>

        </View>

        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FD',
        paddingTop: 25,
    },
    header:{
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#707070",
    },
    iconsStyle:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    filterText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#707070",
    },
    buttonsView:{
        flexDirection: 'row', 
        paddingTop: 10,
        alignItems: 'center' ,
        justifyContent: 'center',
        paddingBottom: 10
    },
    filterIconStyle:{
        width: 40, 
        height: 40, 
    },
    searchInput:{
        flex: 1
      }
   
})