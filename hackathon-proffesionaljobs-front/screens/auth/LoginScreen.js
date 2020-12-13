import React,{useState, useContext} from 'react';
import { Image, ScrollView, Text, View, AsyncStorage, Modal, Platform } from 'react-native';
import {AuthContext} from '../../context/index'
import Input from '../../components/Input'
import { Validator, Rule } from "@cesium133/forgjs";
import {BASE_URL} from '../../constants/Api'
import {CheckBox, Button} from 'react-native-elements'

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setError] = useState(false);

    const { signIn } = useContext(AuthContext);

    
  const logIn  =  async ()  =>  { 
    setLoading(true)



    const valid = new Validator({
        password: new Rule({type: "string", minLength: 5}, "Password should not be null."),
        email:new Rule({type: "email"}, "Email address is not valid"),
      });

    let getError = valid.getErrors({
        email,
        password
    });


   

    if (getError[0]) {
      getError.map(error => setError(error));
      setLoading(false)

    } else {
        setError("")
        // await axios.post(`${BASE_URL}/api/v1/users`, data).then(async (json) => {
        //   let token= json.data?.data?.token
          await AsyncStorage.setItem("userToken", "token")
          signIn({})
          setLoading(false)
        // }).catch(err => {
        //   setError(err.response?.data?.errors[0])
        //   setLoading(false)
        // })
      }
    }



  

    return (
      <ScrollView  style={{backgroundColor: "#F6F7FD"}} bounces={false}>
        <View style={styles.container}>
          <Input
            placeholder="Email"
            autoFocus={true}
            value={email}
            onChange={(email) => setEmail(email)}
            autoFocus={true}
            image={require('../../assets/images/emailicon.png')}
          />

          <Input
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChange={(password) => setPassword(password)}
            autoFocus={true}
            image={require('../../assets/images/passwordicon.png')}
          />

        
          <Text style={styles.error}>{errorMsg}</Text>
  

          <Button
            loading={loading ? true : false}  
            titleStyle={{color:"#EBEBEB"}} 
            buttonStyle={{height: 53 ,borderRadius: 17}} 
            containerStyle={{paddingLeft: 80, paddingRight: 80, paddingTop: 40}} 
            title="Log In" 
            onPress={() => logIn()}
          />



          <View style={{paddingTop: 20}} />

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
  text:{
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#AAAAAA",
    paddingTop: 40,
    paddingBottom: 15
  },
  upper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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