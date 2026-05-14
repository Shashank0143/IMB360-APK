import React from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'

import MaskedView from '@react-native-masked-view/masked-view'
import LinearGradient from 'react-native-linear-gradient'

export default function GradientText({
    text,
}: any) {
    return (
        <View style={{ alignSelf: 'flex-start' }}>
            <MaskedView
                maskElement={
                    <Text style={styles.gradientText}>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={['#00B7D6', '#72E04D']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <Text
                        style={[
                            styles.gradientText,
                            { opacity: 0 },
                        ]}
                    >
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        </View>
    )
}

const styles = StyleSheet.create({
    gradientText: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        marginLeft: 20,
        letterSpacing: -1,
    },
})