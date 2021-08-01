import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const MiniCard = ()=>{
    return(
        <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }}
                style={{
                    width: "45%",
                    height: 100
                }}/>
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2
                }}
                ellipsizeMode="tail"
                numberOfLine={3}
                >This is amazing course asdfasdf asdfaq qwerqwer asdfasf</Text>
                <Text style={{fontSize:12}}>Yale Sheep Cloud Course</Text>
            </View>
        </View>
    )
}

export default MiniCard