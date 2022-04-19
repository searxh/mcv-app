import { View, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { 
    faBell,
    faBook,
    faPlus,
    faUser,
    faGear,
} from '@fortawesome/free-solid-svg-icons'
import tw from 'twrnc'
import ItemSeparator from './ItemSeparator'
import { useNavigation, useRoute } from '@react-navigation/native'

const NavBar = () => {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation<any>()
    const route = useRoute()
    const list = [
        {
            id:1,
            name:'Courses',
            icon:faBook,
            nav:'Home'
        },
        {
            id:2,
            name:'Feed',
            icon:faBell,
            nav:'Feed'
        },
        {
            id:3,
            name:'Register',
            icon:faPlus,
            nav:'Register'
        },
        {
            id:4,
            name:'Account',
            icon:faUser,
            nav:'Account'
        },
        {
            id:5,
            name:'Others',
            icon:faGear,
            nav:'Others'
        }
    ]
    return (
    <View style={tw`absolute bottom-0 rounded-lg`}>
        <FlatList
            data={list}
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            scrollEnabled={false}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item: { name, icon, nav } }) => {
                if (nav!==route.name) {
                    return (
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(nav)}
                            style={tw.style('bg-neutral-100 rounded py-5',{
                                width: width/5
                            })}
                        >
                            <FontAwesomeNative
                                icon={icon}
                                size={30}
                                style={tw`text-sky-700 mx-auto my-auto mb-1`}
                            />
                            <Text 
                                style={tw.style('text-center text-xs text-sky-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )
                } else {
                    return (
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate(nav)
                            }}
                            style={tw.style('bg-neutral-200 rounded py-5',{
                                width: width/5
                            })}
                        >
                            <FontAwesomeNative
                                icon={icon}
                                size={30}
                                style={tw`text-sky-600 mx-auto my-auto mb-1`}
                            />
                            <Text 
                                style={tw.style('text-center text-xs text-sky-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            }}
        >
        </FlatList>
    </View>
    )
}

export default NavBar