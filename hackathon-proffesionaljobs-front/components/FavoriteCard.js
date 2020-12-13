import React from 'react';

import Styled from 'styled-components';

export default function FavoriteCard({title, onPress, image, onClosePress, yellow}) {
  return (
    image ? <ButtonT onPress={onPress}>
                <Image source={{uri: image}}>
                    <CloseButton onPress={onClosePress}><Close source={require('../assets/images/close.png')} /></CloseButton>
                </Image>
        </ButtonT>
    :
        <Button onPress={onPress} yellow={yellow}>
            <Title>{title}</Title>
        </Button>
  )
}



const Button=Styled.TouchableOpacity`
    borderColor: grey
    borderWidth: 2px
    backgroundColor: ${props => props.yellow ? '#beaa6b' :  '#0f2a40'}
    height: 90px
    borderRadius: 10px
    alignItems: center
    justifyContent: center
    marginBottom: 20px
    
`

const CloseButton=Styled.TouchableOpacity`

`

const ButtonT=Styled.TouchableOpacity`
    borderColor: grey
    borderWidth: 2px
    backgroundColor: transparent
    height: 90px
    borderRadius: 10px
    alignItems: center
    marginBottom: 20px
    flexDirection: row
    
`
const Close = Styled.Image`
    width: 25px
    height: 25px
    marginLeft: 5px
`


const Title=Styled.Text`
    fontSize: 16px
    fontWeight: 500
    color: white
    paddingLeft: 30px
    paddingRight: 30px
`
const Image=Styled.ImageBackground`
    height: 90px
    borderRadius: 10px
    marginLeft: -2px
    marginRight: -2px
    flex: 1
    overflow: hidden

`