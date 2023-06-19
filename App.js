import React from 'react'
import Otp from './assets/screens/Otp'
import Feedback from './assets/screens/Feedback'
import Login from './assets/screens/Login'
import Regiter from './assets/screens/Regiter'
import Account from './assets/screens/Account'
import ThriftyLog from './assets/screens/ThriftyLog'
import Tabs from './assets/screens/Tabs'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
    <Tabs/>
    </NavigationContainer>
  )
}

export default App