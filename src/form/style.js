import {StyleSheet} from 'react-native';
// import colors from '../constants/colors'

const styles = StyleSheet.create({
    //页面背景
    bg:{
        backgroundColor:'#43565E'
        // backgroundColor:'#43565E'
    },
    modalBox: { // Loading居中
        flex:1,
    },
    buttonView: {
        height: 40,
        backgroundColor: 'rgb(33, 150, 243)',
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        marginTop: 10,
    },
    //滚动视图背景
    bgScroll:{
        backgroundColor:'#F5F5F5',
        padding:15
    },
    //默认容器
    container: {
        flex: 1,
        padding:0,
        backgroundColor: "#f5f5f5"
    },
    //表单面板
    formPanel:{
        backgroundColor:'#FFF',
        padding:20
    },
    //居中
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    androidButtonText: {
        color: 'blue',
        fontSize: 20,
    },
    item: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        margin: 8,
    },
    listItem:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 12,
        paddingBottom: 10,
        marginBottom: 10,
    }
});
export default styles;
