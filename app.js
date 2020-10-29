
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentscreens from "./src/screens/componentscreens";
import ListScreen from './src/screens/listscreen'
const navigator = createStackNavigator(
  /* and we cant go back with what is love and what is lost so fellas comedown on
  our tears and we can't go back with what is love and what is lost so fellas 
  go back on our tears */

  {
    Home: HomeScreen,
    Components : componentscreens,
    list: ListScreen
  },
  {
    initialRouteName: 'list',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
