import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default function GradientButton({
    title,
    onPress,
    style,
}: any) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            <LinearGradient
                colors={['#00A9C7', '#7BE34F']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[styles.button, style]}
            >
                <Text style={styles.buttonText}>
                    {'    '}
                    {title}
                    {'    '}›
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 45,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.15,
        shadowRadius: 6,

        elevation: 5,
        marginBottom: 50,
        marginTop: -50,
    },

    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        marginTop: 2,
    },
})