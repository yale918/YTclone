import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Card = () => {

    const mycolor = "#212121"

    return (
        <View style={{marginBottom:10,
/*                   
            margin: 10,

            shadowColor: "#000",
            shadowOffset:{ 
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,    
            shadowRadius: 2.62,
            backgroundColor:"#fff",
            elevation: 4,
*/
        }}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }}
                style={{
                    width: "100%",
                    height: 200
                }}
            >
            </Image>

            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <MaterialIcons name="account-circle" size={32} color={mycolor} />
                <View
                    style={{
                        marginLeft: 10,
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        width:Dimensions.get("screen").width - 50
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >this is amazing course asdfasdf asdfasaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdf asdfasdfasdfasdfasdf</Text>
                    <Text>this is amazing course</Text>
                </View>
            </View>
        </View>
    )
}

export default Card