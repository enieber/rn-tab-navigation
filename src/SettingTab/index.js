import React from 'react';
import {
    SafeAreaView,
    Button,
    Text,
} from 'react-native';
import zeroOrOne from '@helpers/zeroOrOne'

const setTab = (props, isShow) => {
    if  (isShow) {
        props.navigation.navigate('TabNavigator')
    } else {
        props.navigation.navigate('TabNavigatorWithOptional')
    }
    console.log(`Show tab ${isShow}`)
}

const SettingTab = (props) => {
    return (
        <>
            <SafeAreaView>
                <Text>Setting</Text>
                <Button onPress={() => {
                    if (zeroOrOne() === 0) {
                        setTab(props, false)
                    } else {
                        setTab(props, true)
                    }
                }} title="SetTabBar" />
            </SafeAreaView>
        </>
    );
};

export default SettingTab
