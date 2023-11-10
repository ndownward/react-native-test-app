import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ???
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
// import { withAuthenticator } from 'aws-amplify-react-native';
const { withAuthenticator, AmplifySignOut } = require('@aws-amplify/ui-react');

import NavigationScreen from './screens/Navigation';
import LandingScreen from './screens/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/Register';
import ResetPasswordScreen from './screens/ResetPassword';

const homeImage = require('./images/Home.png');
const heartImage = require('./images/heart.png');
const profileImage = require('./images/profile.png');

export type RootStackParams = {
  Landing: any;
  Navigation: any;
  Register: any;
  ResetPassword: any;
};

Amplify.configure(config);

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Landing'>
        <RootStack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
        <RootStack.Screen name="Navigation" component={NavigationScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const AppWithAuth = withAuthenticator(App);
export default AppWithAuth;


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Div from './components/Div';
// import Home from './components/screens/Home';
// import Recommendations from './components/screens/Recommendations';
// import Profile from './components/screens/Profile';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// const Tab = createBottomTabNavigator();

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text>{title}</Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <>
//      <SafeAreaView style={backgroundStyle}>
//       <Div color="red" name="Nicola"></Div>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Hey cutie">
//             Edit <Text style={styles.highlight}>App.tsx</Text> test this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//         </ScrollView>
//         <View 
//         style={styles.bottomNavBar}
//         >
//           <NavigationContainer>
//             <Tab.Navigator>
//               <Tab.Screen name="Home" component={Home} options={{headerShown: true}} />
//               {/* change this */}
//               <Tab.Screen name="Recommendations" component={Recommendations} options={{headerShown: true}}/>
//               <Tab.Screen name="Profile" component={Profile} options={{headerShown: true}} />
//             </Tab.Navigator>
//           </NavigationContainer>
//           </View>
//       </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   bottomNavBar: {
//     color: "blue",
//     zIndex: 999,
//     position: "relative",
//     bottom: 50,
//   }
// });

// export default App;