import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Feed from '../Components/HomeTab/Feed'
import Header from '../Components/HomeTab/Header'
import Story from '../Components/HomeTab/Story'

const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Header/>
      <Story/>
      <Feed/>
    </SafeAreaView>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#041524",
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0
  }
})
