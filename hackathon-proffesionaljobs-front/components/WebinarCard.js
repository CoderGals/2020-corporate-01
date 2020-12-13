import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Image as ImageBg} from 'react-native'
import Styled from 'styled-components';

export default function WebinarCard({title, image, time, date, keyx, description, fullScreen, onPress, onSendButton, onSendButtonText,onSendButtonDisabled, onBrowser, onCall, onMail}) {
  return (
        <Btn onPress={onPress} key={keyx}>
            <Image resizeMode="contain" source={{uri:image}} />
            <Title>{title}</Title>

            <Center>
                <SubTitle>{date}</SubTitle>
                    <Right />
                <SubTitle>{time}</SubTitle>
            </Center>

            <Desc numberOfLines={fullScreen ? 10000: 2}>{description}</Desc>


            {fullScreen && <BtnSend onPress={onSendButton} disabled={onSendButtonDisabled}>
                <BtnText>{onSendButtonText}</BtnText>
            </BtnSend>}

        <Row>
            {onCall &&<Button onPress={onCall}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 28, height: 28, marginRight: 20, tintColor: 'white'}} 
                    source={require('../assets/images/phone.png')} 
                />
            </Button>}

            {onBrowser && <Button onPress={onBrowser}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 28, height: 28, marginRight: 20, tintColor: 'white'}} 
                    source={require('../assets/images/browser.png')} 
                />
            </Button>}
            
            {onMail && <Button onPress={onMail}>
                <ImageBg
                    resizeMode="contain"
                    style={{width: 28, height: 28, tintColor: 'white'}} 
                    source={require('../assets/images/mail.png')} 
                />
            </Button>}

        </Row>

        </Btn>
  )
}


const Button=Styled.TouchableOpacity``

const BtnSend=Styled.TouchableOpacity`
    borderColor: gray
    borderWidth: 1.5px
    backgroundColor: ${props => props.disabled ? '#9c8930' : '#beaa6b'}
    height: 30px
    paddingRight: 20px
    paddingLeft: 20px
    alignItems: center
    justifyContent: center
    marginTop: 40px
`
const BtnText=Styled.Text`
    fontSize: 15px
    color: white
`


const Btn=Styled.TouchableOpacity`
    borderColor: #DDDDDD
    borderWidth: 1px
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


const Right=Styled.View`
    paddingRight: 15px
`
const Center=Styled.View`
    alignItems: center
    flexDirection: row
    paddingBottom: 3px
`
const Image=Styled.Image`
    width: 240px
    height: 115px
    marginTop: 19px
    marginBottom: 10px
`

const Title=Styled.Text`
    fontSize: 17px
    fontWeight: bold
    color: white
    paddingBottom: 2px

`

const SubTitle=Styled.Text`
    fontSize: 13px
    fontWeight: 500
    color: white
`

const Desc=Styled.Text`
    fontSize: 11px
    fontWeight: 500
    letterSpacing: -0.27px
    color: white

`

const Row=Styled.View`
    flex-direction: row
    padding-top: 15px
    padding-bottom: 10px
`


