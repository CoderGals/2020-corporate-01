import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Styled from 'styled-components';

export default function FilterCard({title, onPress, border, image}) {
  return (
        <Button border={border} onPress={onPress}>
            {title ?<Title>{title}</Title> : <Image source={{uri: image}} />}
            
        </Button>
  )
}




const Button=Styled.TouchableOpacity`
    borderColor: #beaa6b
    borderWidth: ${props => props.border ? '6px' : '0px'}
    backgroundColor:${props => props.border ? "#beaa6b" : "#0f2a40"}
    height:${props => props.border ? '100px' : '40px'}
    borderRadius: 10px
    alignItems: center
    justifyContent: center
    flex: 1
    
`


const Title=Styled.Text`
    fontSize: 17px
    fontWeight: 500
    color: white
    paddingLeft: 50px
    paddingRight: 50px
    `
