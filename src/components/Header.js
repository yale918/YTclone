import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'


export default function Header() {
    const mycolor = "#212121"

    return (

        <View style={{

            height: 45,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent:'space-between',
            shadowColor: "#000",
            /*
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 60,
            */
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
           
        }}>
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <AntDesign
                    style={{
                        marginLeft: 20
                    }}
                    name="youtube" size={32} color="red" />
                <Text style={{
                    fontSize: 22,
                    marginLeft: 5,
                    color:mycolor,
                    fontWeight:"bold"
                }}>YouTube</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent:"space-between",
                width:150,
                margin:5
            }}>
                <Ionicons name="md-videocam" size={32} color={mycolor} />
                <Ionicons name="md-search" size={32} color={mycolor} />
                <MaterialIcons name="account-circle" size={32} color={mycolor} />
            </View>
        </View>
    );
}
