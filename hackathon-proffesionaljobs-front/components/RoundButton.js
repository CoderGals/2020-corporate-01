import React from 'react';
import Styled from 'styled-components';

export default function RoundButton({label, checked, icon, onPress}) {
    return (
        <Button icon={icon} checked={checked} onPress={onPress}>
            {icon && <Icon checked={checked} source={icon} resizeMode="contain" />}
            <Text checked={checked}>
                {label}
            </Text>
        </Button>
  )
}




const Button=Styled.TouchableOpacity`
    height: 42px
    borderRadius: 15px
    backgroundColor: #ffffff
    flex: 1
    borderColor: ${props => props.checked   ? "#017BFF" : "#D9D9D9"}
    borderWidth: 1px
    flexDirection: ${props => props.icon   ? "row" : "column"}
    alignItems: center
    justifyContent: ${props => props.icon   ? "flex-start" : "center"}
`
const Text=Styled.Text`
    fontWeight: 500
    fontStyle: normal
    textAlign: center
    fontSize:  17px
    color: ${props => props.checked   ? "#017BFF" : "#D9D9D9"}

`

const Icon=Styled.Image`
    width: 15px
    height: 23px
    marginLeft: 10px
    marginRight: 10px
    tintColor: ${props => props.checked ? "#017BFF" : "#D9D9D9"}

`


