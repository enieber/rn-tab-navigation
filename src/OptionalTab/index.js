/**
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
} from 'react-native';

const OptionalTab: () => React$Node = () => {
    return (
        <>
            <SafeAreaView>
                <Text>This Tab is optional</Text>
            </SafeAreaView>
        </>
    );
};

export default OptionalTab;
