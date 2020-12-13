import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Image as ImageBg} from 'react-native'
import Styled from 'styled-components';

export default function BasicCard({image, title, subtitle, description, onWhatsapp, onCall, onMail}) {
  return (
        <View>
                {image ? <Image resizeMode="contain" source={image} /> : <View style={{paddingTop: 15}} /> }
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
            {description &&<Desc>{description}</Desc>}

        <Row>
            {onCall && <Button onPress={onCall}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 35, height: 35, marginRight: 45, tintColor: 'white'}} 
                    source={require('../assets/images/phone.png')} 
                />
            </Button>}

            {onWhatsapp && <Button onPress={onWhatsapp}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 35, height: 35, marginRight: 45, tintColor: 'white'}} 
                    source={require('../assets/images/whatsapp.png')} 
                />
            </Button>}

            {onMail && <Button onPress={onMail}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 35, height: 35, tintColor: 'white'}} 
                    source={require('../assets/images/mail.png')} 
                />
            </Button>}
        </Row>
        
        </View>
  )
}




const View=Styled.View`
    backgroundColor: #0f2a40
    flex: 1
    width: 80%
    borderRadius: 15px
    alignItems: center
    marginBottom: 11px
    paddingLeft: 15px
    paddingRight: 15px
    paddingBottom: 10px
`


const Image=Styled.Image`
    width: 79px
    height: 79px
    marginTop: 19px
    marginBottom: 10px
`

const Title=Styled.Text`
    fontSize: 20px
    fontWeight: 500
    color: white
    textAlign: center
`

const SubTitle=Styled.Text`
    fontSize: 17px
    fontWeight: 500
    color: lightblue

`

const Desc=Styled.Text`
    fontSize: 11px
    fontWeight: 500
    letterSpacing: -0.27px
    color: white
    marginBottom: 15px
    marginTop: 10px


`

const Row=Styled.View`
    flexDirection: row
    marginTop: 10px
    marginBottom: 20px

`

const Button=Styled.TouchableOpacity``


