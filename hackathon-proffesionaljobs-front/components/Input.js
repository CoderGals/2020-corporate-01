import React from 'react';

import Styled from 'styled-components';

export default function TextInput({ label, value, onChange, image, placeholder ,keyboardType,secureTextEntry, disableCapitalize, onFocus, birthday}) {
  return (
        <View>
            <Label>{label}</Label>

                <Row>
                    <Image source={image} resizeMode="contain" />
                        {birthday ? <Label birthday={birthday}>{birthday}</Label>:
                    <Input value={value} onFocus={onFocus}   autoCapitalize={disableCapitalize ? 'none' : 'sentences'} onChangeText={onChange} style={{fontSize: 16, fontWeight:'400'}} secureTextEntry={secureTextEntry}  keyboardType={keyboardType} placeholderTextColor="#adadad" placeholder={placeholder}/>}
                </Row>
                {birthday && birthday != "Birthdate" ? <BlueLine /> : <Line  />}

        </View>
  )
}




const Input=Styled.TextInput`
    flex: 1
`
const Line=Styled.View`
    background: #adadad
    height: 1px

`

const BlueLine=Styled.View`
    background: #5988EF
    height: 1px

`

const View=Styled.View`
    paddingBottom: 14.5px
`

const Row=Styled.View`
    flexDirection: row
    alignItems: center
    paddingBottom: 7.5px

`
const Label=Styled.Text`
    fontSize: 16px
    fontWeight: 400
    fontStyle: normal
    color: ${props => props.birthday == "Birthdate" ? "#adadad" : "#5988EF"}
    paddingBottom: ${props => props.birthday ? "0px" : "12px"}
`

const Image=Styled.Image`
    width: 16.5px
    height: 16.4px
    marginRight: 3.5px
`

