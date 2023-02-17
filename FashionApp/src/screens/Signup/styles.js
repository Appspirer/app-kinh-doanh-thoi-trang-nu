import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        width: width
    },
    item: {
        height: height * 0.6,
    },
    skip_button:{
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 2
    },
    skip: {
        fontSize:17
    },
    carousel_container: {
        height: height * 0.65,
    },
    dot_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    dot: {
        height: 7,
        width: 7,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.black,
        marginHorizontal: 3
    },
    title: {
        fontSize: 17,
        alignSelf: 'center',
        marginTop: 20
    },
    sub_title: {
        color: Colors.gray_text,
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 10
    },
    button_container: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 32,
        marginHorizontal: 16
    },
    button: {
        borderWidth:1,
        borderColor: Colors.black,
        width:0.45*width,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:16
    },
    login:{
        fontSize:17
    },
    signup:{
        fontSize:17,
        color: Colors.white
    }
})