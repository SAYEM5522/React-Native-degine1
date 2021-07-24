import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const FeedDetail = ({name,price,image,color}) => {
  const width=Dimensions.get('screen').width
  const height=Dimensions.get('screen').height
  return (
    <View style={{backgroundColor:color,borderRadius:40,margin:10,width:width-115,height:height/2+50}}>
    
      <Image
      source={{uri:image}}
      style={{resizeMode:'cover',width:200,height:300,alignSelf:'center',top:30}}
      />
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <View style={{marginLeft:15,marginTop:15}}>
        <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>{name}</Text>
        <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}><Text style={{fontSize:17,}}>$</Text> {price}</Text>
      </View>
      <AntDesign name="shoppingcart" size={28} style={{marginRight:20}} color="white" />

      </View>

    </View>
  )
}

export default FeedDetail

const styles = StyleSheet.create({})
