import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color: Colors.white,
        fontSize:18
    },
    content:{
        alignItems:'center',
        height:height *0.6,
        justifyContent:'space-between',
        marginTop:height*0.1
    }
})