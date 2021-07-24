import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import StoryRells from './StoryRells'

const Story = () => {
  const data=[{
    id:'1',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnPqu9Z4_5rZ3xNVQsKmEpzJW0GYGtxLYxw&usqp=CAU',
    name:'Apple',
    color:'red'
  },
  {
    id:'2',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBn5KRSr1IFZHZJpen5LyjICLzNEuubKg6KA&usqp=CAU',
    name:'Strawberry',
    color:'white'
  },
  {
    id:'3',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvNyJB397uVYkBPqGNDVrC0jiZGM_fOcu9Q&usqp=CAU',
    name:'Apple',
    color:'orange'
  },
  {
    id:'4',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnPqu9Z4_5rZ3xNVQsKmEpzJW0GYGtxLYxw&usqp=CAU',
    name:'Apple',
    color:'red'
  },
  {
    id:'5',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnPqu9Z4_5rZ3xNVQsKmEpzJW0GYGtxLYxw&usqp=CAU',
    name:'Apple',
    color:'orange'
  }

]
const renderItem=({item})=>{
return(
  <StoryRells
  img={item.img}
  name={item.name}
  color={item.color}
  />
)
}
  return (
    <View>
     <FlatList
     data={data}
     keyExtractor={(item)=>item.id}
     horizontal
     showsHorizontalScrollIndicator={false}
     renderItem={renderItem}
     />
    </View>
  )
}

export default Story

const styles = StyleSheet.create({})
