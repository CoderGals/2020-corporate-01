import React from "react";
import Styled from "styled-components";


export default function CommentSection({ onPress, comment, byWho, date, disable, key, filter}) {
  return (
    <Button key={key} onPress={onPress} disabled={disable}>
     <Text filter={filter} disable={disable}>Comment: {comment}</Text>
     <Text filter={filter} disable={disable}>By: {byWho}</Text>
     <Text filter={filter} disable={disable}>Date: {date}</Text>
    </Button>
  );
} 

const Button = Styled.TouchableOpacity`
  padding-bottom: 9px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  border-bottom-color: #cccccc;
  border-bottom-width: 0.5px
  

`;

const Text= Styled.Text`
    fontWeight: 500
    fontStyle: normal
    color: ${props => props.disable ? 'black' : props.filter ? '#0f2a40' : 'white'}
    fontSize:  17px
`