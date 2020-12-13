import React,{useState, useContext, useEffect} from 'react';
import { Image, ScrollView, Text, View, AsyncStorage, Modal, Platform } from 'react-native';
import {AuthContext} from '../../context/index'
import Input from '../../components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements'
import { Validator, Rule } from "@cesium133/forgjs";
import {BASE_URL} from '../../constants/Api'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import axios from 'axios'

export default function RegisterScreen(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [realDate, setRealDate] = useState("");
    const [contractNumber, setContractNumber] =useState(null)
    const [date, setDate] = useState(new Date("1985-01-01T12:00:00-06:30"))
    const [errorMsg, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [jobCategory, setJobCategory] = useState("");
    const [yearExp, setYearExp] = useState("");
    const [companyName, setCompanyName] = useState("");

    const { signIn } = useContext(AuthContext);


    useEffect(() => {
      let type = props.route.params?.type
      setType(type)
    })
    
  const register  =  async ()  =>  { 
    setLoading(true)
    // const valid = new Validator({
    //     realDate: new Rule({ type: "date"}, "Geburtstagsfeld ist erforderlich."),
    //     password: new Rule({type: "string", minLength: 5}, "Last Namensfeld ist erforderlich."),
    //     email:new Rule({type: "email"}, "Ihre E-Mail-Adresse ist keine gültige E-Mail-Adresse."),
    //     lastName: new Rule({type: "string", minLength: 5}, "Last Namensfeld ist erforderlich."),
    //     firstName: new Rule({type: "string", minLength: 5}, "First Namensfeld ist erforderlich."),
    // });

    // let getError = valid.getErrors({
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //     realDate
    // });


    // let data={
    //   full_name: name,
    //   birthday: realDate,
    //   gender,
    //   vkb_id: vkbId
    // }

    // if (getError[0]) {
    //   getError.map(error => setError(error));
    //   setLoading(false)

    // } else {
    //     setError("")
    //     // await axios.post(`${BASE_URL}/api/v1/users`, {full_name: "volt1", birthday: "1985-01-01T12:00:00.0630", gender: "male", vkb_id: "200012310223"}).then(async (json) => {
    //     //   let token= json.data?.data?.token
          if(type == "employee"){
            await axios.post('https://localhost:5001/api/auth/register', {
              firstName,
              lastName,
              email,
              birthdate: realDate,
              password,
              jobCategory,
              experienceLevel: yearExp
            }).then(json => console.log(json)).catch(err => console.log(err))
            await AsyncStorage.setItem("type", "employee")
            await AsyncStorage.setItem("userToken", "token")
          }else{
            await AsyncStorage.setItem("type", "employeer")
          }
          signIn({})
          setLoading(false)
        // }).catch(err => {
        //   setError(err.response?.data?.errors[0])
        //   setLoading(false)
        // })
      // }
    }


    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);

    };

    const showDatePickerModal = () => {
      if(Platform.OS=="android" && show){
          return(
            <DateTimePickerModal
                maximumDate={new Date("2002-12-31T12:00:00.0630")}
                minimumDate={new Date("1929-12-31T12:00:00.0630")}
                date={new Date("1985-01-01T12:00:00.0630")}
                isVisible={show}
                mode="date"
                onConfirm={(date)=>{
                  setShow(false)
                  setRealDate(date)
                }}
                onCancel={()=>setShow(false)}
              />
          )
      }else{
        return(
         <Modal animationType="fade" transparent={true} visible={show}> 
         <View style={styles.modalView}>
                {Platform.OS === 'ios' && (
                    <TouchableOpacity style={{justifyContent: 'flex-end', flexDirection:'row',flex: 1, paddingTop: 10, paddingRight: 20}} onPress={() => {
                      setShow(false)
                      setRealDate(date)
                    }}>
                      <Text style={{fontSize: 19, fontWeight: "600", color: 'blue'}}>Done</Text>
                    </TouchableOpacity>
                )}
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    display="default"
                    timeZoneOffsetInMinutes={0}
                    onChange={onChange}
                    maximumDate={new Date(2004, 0, 1)}
                    minimumDate={new Date(1930, 0, 1)}
                />
            </View>
            
        </Modal>)
      }
    
    }

    return (
      <ScrollView  style={{backgroundColor: "#F6F7FD"}} bounces={false}>
        <View style={styles.container}>
          <Input
            placeholder="First Name*"
            autoFocus={true}
            value={firstName}
            onChange={(firstName) => setFirstName(firstName)}
            autoFocus={true}
            image={require('../../assets/images/man.png')}
          />

          <Input
            placeholder="Last Name*"
            autoFocus={true}
            value={lastName}
            onChange={(lastName) => setLastName(lastName)}
            autoFocus={true}
            image={require('../../assets/images/man.png')}
          />

          <Input
            placeholder="Email*"
            autoFocus={true}
            value={email}
            onChange={(email) => setEmail(email)}
            autoFocus={true}
            image={require('../../assets/images/emailicon.png')}
          />

          {show && showDatePickerModal()}


          <TouchableOpacity onPress={()=>setShow(true)}>
            <Input
              birthday={realDate ?  moment(realDate).format('DD-MM-YYYY'): "Birthdate"}
              image={realDate ?  require('../../assets/images/blueface.png'): require('../../assets/images/face.png')}
            />
          </TouchableOpacity>


          {type == "employeer" && <Input
              placeholder="Company Name(Optional)"
              value={companyName}
              onChange={(companyName) => setCompanyName(companyName)}
              autoFocus={true}
              image={require('../../assets/images/passwordicon.png')}
          />}

          {type == "employee" && <Input
            placeholder="Job Category"
            value={jobCategory}
            onChange={(jobCategory) => setJobCategory(jobCategory)}
            autoFocus={true}
            image={require('../../assets/images/passwordicon.png')}
          />}

        {type == "employee" && <Input
            placeholder="Experience Level(e.x Junior)"
            value={yearExp}
            onChange={(yearExp) => setYearExp(yearExp)}
            autoFocus={true}
            image={require('../../assets/images/passwordicon.png')}
          />}




        <Input
            placeholder="Password*"
            value={password}
            secureTextEntry={true}
            onChange={(password) => setPassword(password)}
            autoFocus={true}
            image={require('../../assets/images/passwordicon.png')}
          />
         

        

          {/* <View style={styles.vkbId}>
            <CheckBox
              size={30}
              title='DSGVO'
              textStyle={{color:"#AAAAAA", fontSize: 17}}
              containerStyle={{backgroundColor: '#F6F7FD', borderWidth: 0, alignItems: 'center'}}
              uncheckedIcon='square-o'
              checked={checked}
              onPress={() => setChecked(!checked)} />
          </View> */}

          <Text style={styles.error}>{errorMsg}</Text>
  

          <Button
            loading={loading ? true : false}  
            titleStyle={{color:"#EBEBEB"}} 
            buttonStyle={{height: 53 ,borderRadius: 17}} 
            containerStyle={{paddingLeft: 80, paddingRight: 80, paddingTop: 40}} 
            title="Anmeldung" 
            onPress={() => register()}
          />



          <View style={{paddingTop: 20}} />

         </View>



    
      </ScrollView>
    )
}


// {
//   await axios.post(`${BASE_URL}/api/v1/users`, {full_name: "voltqdqdq", birthday: "1985-01-01T12:00:00.0630", gender: "male", vkb_id: "20231123"}).then(async (json) => {
//     let token= json.data?.data?.token
//     await AsyncStorage.setItem("userToken", token)
//     signIn({})
//     setLoading(false)}).catch(err => console.log(err?.response))
// }

const styles= {
  container: {
    backgroundColor: '#F6F7FD',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    height: "100%",
  },
  upperView:{
    paddingBottom: 30,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent:'center'
  },
  upper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#AAAAAA",
    paddingTop: 40,
    paddingBottom: 15
  },
  row:{
    flexDirection: 'row'
  },
  dsg:{
    paddingTop: 50,
  },
  error:{
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
    color: 'red'
  },
  modalView:{
    position: 'absolute', 
    bottom: 20,
    left: 0, 
    right: 0, 
    backgroundColor: 'white'
  }
}