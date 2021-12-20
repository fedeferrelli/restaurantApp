import {StyleSheet} from 'react-native';


const globalStyles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#FFDA00',
        borderRadius: 50,
        marginHorizontal: 10
    },

    buttonText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color:'#000'
    }
});


export default globalStyles;
