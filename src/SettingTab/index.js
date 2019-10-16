/**
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    Button,
    Text,
} from 'react-native';
import zeroOrOne from '@helpers/zeroOrOne'

const setTab = (isShow) => {
    console.log(`Show tab ${isShow}`)
    console.log(TabNavigator)
}

const SettingTab: () => React$Node = () => {
    return (
        <>
            <SafeAreaView>
                <Text>Setting</Text>
                <Button onPress={() => {
                    if (zeroOrOne() === 0) {
                        setTab(false)
                    } else {
                        setTab(true)
                    }
                }} title="SetTabBar" />
            </SafeAreaView>
        </>
    );
};

export default SettingTab;
