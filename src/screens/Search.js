import React, { useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyD-VJKNEtBJvfb3DQPL_QnmVR0oSSIsaVI
const SearchScreen = () => {
    const [value, setValue] = useState("")
    const [miniCardData, setMiniCard] = useState([])
    const fetchData = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyD-VJKNEtBJvfb3DQPL_QnmVR0oSSIsaVI`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 5,
                backgroundColor: "#fff"

            }}>
                <Ionicons name="md-arrow-back" size={32} />
                <TextInput
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6"
                    }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <Ionicons
                    name="md-send"
                    size={32}
                    onPress={()=>fetchData()}
                />
            </View>
            <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView>
        </View>
    )
}

export default SearchScreen