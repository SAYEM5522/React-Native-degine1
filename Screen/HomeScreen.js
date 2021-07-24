import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../TabScreen/HomeTab';
import CartTab from '../TabScreen/CartTab';
import AddTab from '../TabScreen/AddTab';
import NetworkTab from '../TabScreen/NetworkTab';
import ProfileTab from '../TabScreen/ProfileTab';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 

    tabBarOptions={{
      showLabel:false,
      tabStyle:{
        backgroundColor:'#041524',
        elevation:0,
        
      },
      style:{
        borderTopWidth: 0
      }
    
    

    }}
    >
        <Tab.Screen
     options={{
       tabBarIcon:({focused})=>{
         return(
          <AntDesign name="appstore-o" size={24} color={focused?"#ED8F7F":"white"} />
         )
       }
     }}
        name="Home" component={HomeTab} />

        <Tab.Screen 
        
        options={{
          tabBarIcon:({focused})=>{
            return(
              <AntDesign name="shoppingcart" size={24} color={focused?"#ED8F7F":"white"} />
            )
          }
        }}
        name="Cart" component={CartTab} />
        <Tab.Screen
        
        options={{
          tabBarIcon:({focused})=>{
            return(
              <AntDesign name="pluscircleo"  size={26} color={focused?"#ED8F7F":"white"}/>
            )
          }
        }}
        name="Add" component={AddTab} />
        <Tab.Screen 
         options={{
          tabBarIcon:({focused})=>{
            return(
              <Entypo name="bar-graph" size={24} color={focused?"#ED8F7F":"white"} />
            )
          }
        }}
        
        name="Network" component={NetworkTab} />
        <Tab.Screen 
        
        options={{
          tabBarIcon:({focused})=>{
            return(
              <SimpleLineIcons name="people" size={24} color={focused?"#ED8F7F":"white"}/>
            )
          }
        }}
        name="Profile" component={ProfileTab} />


      </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
