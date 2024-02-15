import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import GradientHeader from '../../../components/GradientHeader'

import Hinpyoukai from '../../../scenes/hinpyoukai/Hinpyoukai'
import HinpyoukaiResult from '../../../scenes/hinpyoukaiResult/HinpyoukaiResult'

import { version } from '../../../config'

const Stack = createStackNavigator()

export const HomeStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Hinpyoukai"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Hinpyoukai"
        component={Hinpyoukai}
        options={({ navigation }) => ({
          title: `version ${version}`,
          headerShown: true,
          headerBackTitleVisible: false,
          headerBackground: () => <GradientHeader />,
        })}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen
          name="HinpyoukaiResult"
          component={HinpyoukaiResult}
          options={({ navigation }) => ({
            title: 'HinpyoukaiResult',
            headerBackTitleVisible: false,
            headerBackground: () => <GradientHeader />,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}