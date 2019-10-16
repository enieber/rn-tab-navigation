import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProfileTab from './ProfileTab'
import SettingTab from './SettingTab'
import OptionalTab from './OptionalTab'

const TabNavigator = createBottomTabNavigator({
    Profile: ProfileTab,
    Setting: SettingTab,
    Optional: {
        screen: OptionalTab,
        navigationOptions:{
            showLabel: false
        }
    },
});

export default createAppContainer(TabNavigator);
