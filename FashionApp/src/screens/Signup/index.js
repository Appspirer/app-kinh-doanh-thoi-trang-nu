import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const data = [{}, {}, {}]

export default function SignUp({navigation}) {

    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.carousel_container}>
                <TouchableOpacity style={styles.skip_button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
                <Carousel
                    loop
                    width={width}
                    height={height * 0.6}
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setSelected(index)}
                    renderItem={({ item, index }) => (
                        <View key={index} style={styles.item}>
                            <Image source={Images.img_signup} style={styles.img} />
                        </View>
                    )}
                />
                <View style={styles.dot_container}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.dot, {
                                backgroundColor: selected === index ? Colors.black : null
                            }]} />
                        )
                    })}
                </View>
            </View>
            <Text style={styles.title}>Pop Styles</Text>
            <Text style={styles.sub_title}>Over 200+ daily new arrivals</Text>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.login}>Login In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.black }]}>
                    <Text style={styles.signup}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}