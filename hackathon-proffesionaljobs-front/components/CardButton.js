import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Styled from 'styled-components';

export default function CardButton({onPress, image, title, jetz, disabled}) {
  return (
    image ?<Button onPress={onPress} disabled={disabled}>
            <Image jetz={jetz} disabled={disabled} resizeMode="contain"  source={image ? image : require('../assets/images/staricon.png')} />
            <Title disabled={disabled}>{title}</Title>
        </Button> :
        <Button onPress={onPress} disabled={disabled}>
            <Image2 jetz={jetz} resizeMode="contain" image={image} source={require('../assets/images/staricon.png')} />
            <Title disabled={disabled}>{title}</Title>
        </Button>
    
  )
}




const Button=Styled.TouchableOpacity`
    borderColor: #DDDDDD
    borderWidth: 1px
    backgroundColor: ${props => props.disabled ? "gray" : "#0f2a40"}
    flex: 1
    paddingBottom: 10px
    width: 47%
    borderRadius: 15px
    alignItems: center
`


const Image=Styled.Image`
    width: ${props => props.jetz  ? "55px" : "45px"}
    height: ${props => props.jetz  ? "55px" : "45px"}
    marginTop: 20px
    marginBottom: ${props => props.jetz  ? "10px" : "20px"}
    tintColor: white
`
const Image2=Styled.Image`
    width: ${props => props.jetz  ? "55px" : "45px"}
    height: ${props => props.jetz  ? "55px" : "45px"}
    marginTop: 20px
    marginBottom: ${props => props.jetz  ? "10px" : "20px"}
    tintColor: #beaa6b

`

const Title=Styled.Text`
    fontSize: 15px
    fontWeight: 600
    color: white
`