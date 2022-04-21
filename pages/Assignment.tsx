import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import NavBar from '../components/NavBar'

const Assignment = (props:any) => {
    const data = props.route.params
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text>{data.assignment}</Text>
            <View style={tw`flex-1`}></View>
            <NavBar />
        </SafeAreaView>
    )
}

export default Assignment