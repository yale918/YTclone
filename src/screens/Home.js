import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import Test from '../components/Test'

export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <Header />

      <ScrollView>
     <Card />
     <Card />
      <Card />
      <Card /> 
      </ScrollView>
    </View>
  );
}

