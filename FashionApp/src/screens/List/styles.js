import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white
    },
    action_container:{
        flexDirection:'row',
        marginTop:20,
    },
    action:{
        flexDirection:'row',
        alignItems:'center',
        width:0.5*width,
        borderColor:Colors.border,
        justifyContent:'center',
        paddingVertical:12
    },
    text_action:{
        fontSize:15,
        marginHorizontal:5
    },
    item:{
        marginBottom:30
    },
    title_container:{
        width: width*0.43,
    },
    row_info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
    },
    price:{
        fontSize:15,
        fontWeight:'bold'
    },
    heart:{
        marginRight:5
    },
    title:{
        fontSize:15,
        color: Colors.gray_text2
    }
})