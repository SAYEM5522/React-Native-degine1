import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { color } from 'react-native-reanimated'

const StoryRells = ({img,name,color}) => {
  return (
    <View style={{padding:10,display:'flex',alignItems:'center',paddingTop:15}}>
      <View style={{ padding:2,
    borderColor:color,
    borderWidth:2,
    width:73,
    height:73,
    borderRadius:99}}>
     <Avatar
     rounded
     source={{uri:img}}
     size={63}
     />
     </View>
     <Text style={{color:'white'}}>{name}</Text>
    </View>
  )
}

export default StoryRells

const styles = StyleSheet.create({
 
    
  
})
