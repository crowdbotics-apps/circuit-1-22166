import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList166039Navigator from '../features/ArticleList166039/navigator';
import ArticleList166038Navigator from '../features/ArticleList166038/navigator';
import ArticleList166037Navigator from '../features/ArticleList166037/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList166039: { screen: ArticleList166039Navigator },
ArticleList166038: { screen: ArticleList166038Navigator },
ArticleList166037: { screen: ArticleList166037Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
