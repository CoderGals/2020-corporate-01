import React, {useContext} from 'react';
import {Text, View ,StyleSheet, Image, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native';
import CommentSection from '../../components/CommentSection';


export default class CommentsScreen extends React.Component{

    state={
        comments:[
            {
                id: 1,
                comment: "Very good employee. I recommend him for front end developer with ionic.",
                byWho: "Agim Jaha",
                date: "2020/12/01"
            },
            {
                id: 2,
                comment: "Very good employee. I recommend him for front end developer with ionic.",
                byWho: "Agon Xhaka",
                date: "2020/12/01"
            },
            {
                id: 3,
                comment: "Very good employee. I recommend him for front end developer with ionic.",
                byWho: "Mak Wade",
                date: "2020/12/01"
            }
        ]
    }



    showComments = () => {
        return this.state.comments?.map(x => {
            return <CommentSection date={x.date} comment={x.comment} disable={true} byWho={x.byWho} />
        })
    }
    render(){
    
    return (
        <View style={{backgroundColor: '#F6F7FD', flex: 1}}>


        <ScrollView style={styles.container}>
        
        {this.showComments()}   

            
        </ScrollView>

        </View>

        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FD', 
    },
    upper:{
        flexDirection: 'row',
        paddingTop: 38,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header:{
      fontSize: 20,
      fontWeight: "500",
      fontStyle: "normal",
      color: "#707070",
    }
  
  });
  