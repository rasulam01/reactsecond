import { MainScreen } from './MainScreen'
import { PostScreen } from './PostScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { THEME } from './theme'
import { Platform, Text } from 'react-native'
import { AboutScreen } from './AboutScreen'
import { CreateScreen } from './CreateScreen'
import { Content } from './Content'

const platformColour = Platform.OS === 'ios' ? THEME.MAIN_COLOUR : THEME.AUXILIARY_COLOUR


const Navigator = createStackNavigator({
    Main: {
        screen: MainScreen,
    },
    Post: {
        screen: PostScreen,
    },
    About: {
        screen: AboutScreen,
    },
    Content: {
        screen: Content,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `Poster ${navigation.state.params.id}`,
        })
    },
    Create: {
        screen: CreateScreen,
    }
},
{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: platformColour
        },
        headerTintColor: '#456789'
    }
})

export const Application = createAppContainer(Navigator)



