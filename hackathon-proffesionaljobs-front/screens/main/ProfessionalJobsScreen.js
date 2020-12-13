import React, {useContext} from 'react';
import {Text, View ,StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import JobCard from '../../components/JobCard';
import ListItem from '../../components/ListItem';
import {Button} from 'react-native-elements'
import Modal from 'react-native-modal';
const KEYS_TO_FILTERS = ['companyName', 'employeerName', 'jobTitle', 'jobDescription'];
import SearchInput, { createFilter } from 'react-native-search-filter';


export default class ProfessionalJobsScreen extends React.Component{


    state={
        showFilterModal: false,
        jobs:[
            {
                id: 1,
                companyName: "Mozaix",
                employeerName: "Lendrit Kryeziu",
                jobTitle: "FrontEnd Developer with ReactJS",
                jobDescription: "We need a frontend developer for our e commerce project we need to finish it for 2 months",
                contact: "+38344625775",
                category: "DevOps",
                categoryId: 1,
                salary: 10000,//per momth
            },
            {
                id: 2,
                companyName: "Pixelont",
                employeerName: "Rinor Ahmeti",
                jobTitle: "FrontEnd Developer with ReactJS",
                jobDescription: "We need a frontend developer for our e commerce project we need to finish it for 2 months",
                contact: "+38344625775",
                category: "DevOps",
                categoryId: 1,
                salary: null,//for companies
            },
            {
                id: 3,
                companyName: "ICK",
                employeerName: "Agron Sadiku",
                jobTitle: "Full Stack",
                jobDescription: "We need a frontend developer for our e commerce project we need to finish it for 2 months",
                contact: "+38344621235",
                category: "DevOps",
                categoryId: 1,
                salary: 100000,//for companies
            },
            {
                id: 3,
                companyName: "ICK",
                employeerName: "Agron Sadiku",
                jobTitle: "Full Stack",
                jobDescription: "We need a frontend developer for our e commerce project we need to finish it for 2 months",
                contact: "+38344621235",
                category: "Software Engineer",
                categoryId: 2,
                salary: 100000,//for companies
            },
           
        ],
        searchTerm: ''
    }

    componentDidMount(){
        this.setState({unFilteredArray: this.state.jobs})
    }

    filterData = (item) => {
        let filter= this.state.unFilteredArray?.filter(x => x.categoryId == item)
        this.setState({showFilterModal: false, jobs: filter})
    }

    showFilterModal = () => {
        return (
            <Modal isVisible={this.state.showFilterModal} animationType="fade" hasBackdrop={true} backdropColor={"rgba(220,220,220, 0.9)"}>
                <View style={{borderRadius: 10, backgroundColor: 'white'}}> 
                        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',paddingBottom: 9, paddingTop: 10,  borderBottomColor: '#cccccc', borderBottomWidth: 0.5}} onPress={()=>this.setState({showFilterModal:false})}>
                            <Text style={[styles.filterText, {color:'#0f2a40'}]}>Categories</Text>
                        </TouchableOpacity>
                        {/* <ListItem label={"DevOps"} filter={true} onPress={()=>this.setState({campaigns: this.state.unFilteredArray, showFilterModal:false})} key={`1`} /> */}
                        <ListItem filter={true} label={"Software Engineer"} onPress={() => this.filterData(2)} />
                        <ListItem filter={true} label={"DevOps"} onPress={() => this.filterData(1)} />
                        <ListItem filter={true} label={"Project Manager"} onPress={() => this.filterData(3)} />
                        <ListItem filter={true} label={"All"} onPress={() => this.setState({jobs: this.state.unFilteredArray, showFilterModal:false})} />
                    <View style={styles.buttonsView}>
                        <TouchableOpacity onPress={()=>this.setState({showFilterModal:false})}>
                            <Text style={[styles.filterText, {color:'red'}]}>Close</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
            </Modal>
    )
        
    }

    
    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

    showJobs = () => {
        return this.state.jobs?.map(x => {
            return <JobCard
                        employeerName={x.employeerName}
                        category={x.category} 
                        companyName={x.companyName} 
                        jobTitle={x.jobTitle} 
                        onPress={()=>this.props.navigation.navigate('ProfessionalJobDetails')}
                    />
        })
    }

    render(){
        const filteredEmails = this.state.jobs?.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <View style={{backgroundColor: '#F6F7FD', flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' ,borderColor: 'lightgray', borderWidth: 1,}}>
                <SearchInput 
                    onChangeText={(term) => { this.searchUpdated(term) }} 
                    style={{flex: 1}}
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
            return <JobCard
            employeerName={x.employeerName}
            category={x.category} 
            companyName={x.companyName} 
            jobTitle={x.jobTitle} 
            onPress={()=>this.props.navigation.navigate('ProfessionalJobDetails')}
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
   
})