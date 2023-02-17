import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        position: 'absolute',
        zIndex: 1,
        width: width
    },
    top_container: {
        width: width,
        height: height * 0.3,
    },
    img: {
        width: width,
        height: height * 0.3
    },
    content: {
        position: 'absolute',
        top: '37%',
        left: 50,
        width: '30%'
    },
    top_title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    collection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    collection_text: {
        fontSize: 11,
        color: Colors.gray_text,
        marginRight: 5
    },
    dot_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30
    },
    dot: {
        height: 7,
        width: 7,
        borderRadius: 4,
        marginHorizontal: 3,
        backgroundColor: Colors.white
    },
    categories_container: {
        flexDirection: 'row',
    },
    categories_img: {
        width: 0.5 * width,
        height: 0.5*width
    },
    categories_shoes: {
        width: 0.5 * width,
        height: width
    },
    categories_content: {
        position: "absolute",
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_content:{
        fontSize:18,
    },
    number:{
        fontSize:13,
        color: Colors.gray_text2,
        marginTop:3
    }
})