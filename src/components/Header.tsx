import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/jefferson.png'; 
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Jefferson</Text>
            </View>

            <Image source={userImg} style={styles.image}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding: 20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 26,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 26,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})