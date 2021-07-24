import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import FeedDetail from './FeedDetail'

const Feed = () => {
  const data=[{
    id:'1',
    image:'https://lirp-cdn.multiscreensite.com/4ccbd850/dms3rep/multi/opt/passion+fruit+with+mango-1920w.png',
    name:'Sony Products ',
    price:'500',
    color:'#F66C55'
  },
  {
    id:'2',
    image:'https://lirp-cdn.multiscreensite.com/4ccbd850/dms3rep/multi/opt/passion+fruit+with+mango-1920w.png',
    name:'Mens Fashions ',
    price:'500',
    color:'#ED8F7F'
  },
  {
    id:'3',
    image:'https://lirp-cdn.multiscreensite.com/4ccbd850/dms3rep/multi/opt/passion+fruit+with+mango-1920w.png',
    name:'Sony Products ',
    price:'500',
    color:'#8BE6EC'
  },
  {
    id:'4',
    image:'https://lirp-cdn.multiscreensite.com/4ccbd850/dms3rep/multi/opt/passion+fruit+with+mango-1920w.png',
    name:'Sony Products ',
    price:'500',
    color:'#F66C55'
  }]
  const renderItem=({item})=>{
    return(
      <FeedDetail 
      image={item.image}
      name={item.name}
      price={item.price}
      color={item.color}
      />
    )
  }
  return (
    <View style={{margin:10}}>
     <FlatList
     data={data}
     horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor={(item)=>item.id}
    renderItem={renderItem}
     />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})
