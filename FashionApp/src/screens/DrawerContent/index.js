import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import styles from "./styles";

data = [
    {
        id:0,
        title:"SALE"
    },
    {
        id:1,
        title:"TOPS"
    },
    {
        id:2,
        title:"BOTTOMS"
    },
    {
        id:3,
        title:"OUTWEAR"
    },
    {
        id:4,
        title:"CLOTHING"
    },
    {
        id:5,
        title:"DRESSES"
    },
    {
        id:6,
        title:"SHOES"
    },
    {
        id:7,
        title:"ACCESSORIES"
    },
]

export default function DrawerContent({navigation}){
    return(
        <View style={styles.container}>
            <Header
                shownRightItem={false}
                leftIcon={Icons.Icons({name:"menu_white", height:15, width:19})}
                logo="logo_white"
                onPress={()=>navigation.closeDrawer()}
            />
            <View style={styles.content}>
                {data.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index}>
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}