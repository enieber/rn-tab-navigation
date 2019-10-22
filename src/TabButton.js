import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import showTabs from './tabs'

const TabNavigatorWithOptional = createBottomTabNavigator({
    ...showTabs(true),
});

const TabNavigator = createBottomTabNavigator({
    ...showTabs(false),
});

const Stack = createSwitchNavigator({
    TabNavigatorWithOptional,
    TabNavigator,
})

export default createAppContainer(Stack)
