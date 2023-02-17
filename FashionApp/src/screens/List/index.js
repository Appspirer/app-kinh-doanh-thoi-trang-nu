import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        img: Images.shoes1,
        price: 38,
        title: "Black Lace Up Rubber Sole Low Top Sneakers",
        status: 0
    },
    {
        id: 1,
        img: Images.shoes2,
        price: 37,
        title: "Apricot Faux Suede Lace Up Rubber Sole Low",
        status: 1
    },
    {
        id: 2,
        img: Images.shoes3,
        price: 35,
        title: "Pink Satin Fabric Rubber Sole Low Top Sneakers",
        status: 0
    },
    {
        id: 3,
        img: Images.shoes4,
        price: 39,
        title: "Pink Velvet Lace Up Rubber Sole Sneakers",
        status: 0
    }
]

export default function List({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                leftIcon={Icons.Icons({ name: 'back_arrow', height: 20, width: 20 })}
                title="Shoes"
                shownRightItem={false}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.action_container}>
                <TouchableOpacity style={[styles.action, {
                    borderRightWidth: 0.5,
                    borderTopWidth: 1,
                    borderBottomWidth: 1
                }]} onPress={() => navigation.navigate('Filter')}>
                    {Icons.Icons({ name: "filter", height: 14, width: 15 })}
                    <Text style={styles.text_action}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.action, {
                    borderRightWidth: 0.5,
                    borderTopWidth: 1,
                    borderBottomWidth: 1
                }]}>
                    {Icons.Icons({ name: "sort", height: 14, width: 16 })}
                    <Text style={styles.text_action}>Sort</Text>
                    {Icons.Icons({ name: "arrow_down", height: 13, width: 8 })}
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                horizontal={false}
                columnWrapperStyle={{ justifyContent: 'space-around', marginHorizontal: '2%' }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details')}>
                            <Image source={item.img} style={styles.img} />
                            <View style={styles.row_info}>
                                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                                <TouchableOpacity style={styles.heart}>
                                    {Icons.Icons({ name: item.status === 1 ? 'heart_black' : 'heart_white', height: 14.67, width: 16 })}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.title_container}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}