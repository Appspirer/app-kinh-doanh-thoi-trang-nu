import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Carousel from 'react-native-reanimated-carousel';
import styles from "./styles";
import Images from "../../themes/Images";
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')
const data = [{}, {}, {}]

export default function Categories({ navigation }) {
    const [selected, setSelected] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <View style={styles.header}>
                    <Header
                        onPress={() => navigation.openDrawer()}
                        leftIcon={Icons.Icons({name:"menu", height:15, width:19})}
                    />
                </View>
                <Carousel
                    loop
                    width={width}
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setSelected(index)}
                    renderItem={({ item, index }) => (
                        <View key={index}>
                            <Image source={Images.img_categories} style={styles.img} />
                            <View style={styles.content}>
                                <Text style={styles.top_title}>Get 70% discount</Text>
                                <View style={styles.collection}>
                                    <Text style={styles.collection_text}>New Collection</Text>
                                    {Icons.Icons({ name: "next", height: 9, width: 6 })}
                                </View>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.dot_container}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.dot, {
                                opacity: selected === index ? 1 : 0.4
                            }]} />
                        )
                    })}
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.categories_container}>
                    <View>
                        <TouchableOpacity>
                            <Image source={Images.categories_top} style={styles.categories_img} />
                            <View style={styles.categories_content}>
                                <Text style={styles.title_content}>Tops</Text>
                                <Text style={styles.number}>479 items</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.categories_bottom} style={styles.categories_img} />
                            <View style={styles.categories_content}>
                                <Text style={styles.title_content}>Bottoms</Text>
                                <Text style={styles.number}>785 items</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('List')}>
                        <Image source={Images.categories_shoes} style={styles.categories_shoes} />
                        <View style={styles.categories_content}>
                            <Text style={styles.title_content}>Shoes</Text>
                            <Text style={styles.number}>127 items</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.categories_container}>
                    <TouchableOpacity>
                        <Image source={Images.categories_sweemwear} style={styles.categories_img} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Images.categories_accessories} style={styles.categories_img} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}