import ProfileTab from './ProfileTab'
import SettingTab from './SettingTab'
import OptionalTab from './OptionalTab'

const showTabs = (showOptional) => {
    if (showOptional) {
        return {
            Profile: ProfileTab,
            Setting: SettingTab,
            Optional: OptionalTab,
        }
    }
    return {
        Profile: ProfileTab,
        Setting: SettingTab,
    }
}

export default showTabs
