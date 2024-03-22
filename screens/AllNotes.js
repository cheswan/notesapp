import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'

const AllNotes = ({ setScreen, list }) => {
    
    const renderItem = () => {
        let myList = []
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let content = (
                <View>
                    <Text>{element.note}</Text>
                </View>
            )
            myList.push(content)
        }
        return myList
    }
    return (
        <View style={{
            backgroundColor: 'white',
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
        }}>
            <Header showBack={true} title={'All Notes'} setScreen={setScreen}></Header>
            <View>
                <Text>All Notes:</Text>
            </View>
            <View>
                {renderItem()}
            </View>
        </View>
    )
}

export default AllNotes

const styles = StyleSheet.create({})