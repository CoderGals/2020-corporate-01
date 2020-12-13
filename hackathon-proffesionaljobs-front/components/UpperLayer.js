import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Styled from 'styled-components';

export default function UpperLayer({onPress, children, logo}) {
  return (
        <View> 
          {children}
        </View>
  )
}




const View=Styled.View`
    paddingTop: 15px
    background: white
    borderBottomLeftRadius: 30px
    borderBottomRightRadius: 30px
`


