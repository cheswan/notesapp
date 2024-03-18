import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Header = ({ title, showBack, setScreen}) => {
    return (

        <View style={styles.HeaderContainer}>
            <Text>{title ? title : 'test'}</Text>
            {showBack && <View style={{
                position: 'absolute',
                left: 0,
                paddingLeft: 4,
            }}>
                <Button
                    title="Back"
                    onPress={() => {setScreen('home')}}
                />
            </View>}
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        // borderRadius: 20,
        backgroundColor: '#15AAD7',
        width: "100%",
        height: "20",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        padding: 10,
    }
})