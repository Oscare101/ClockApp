import { useEffect, useState } from 'react'
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import ClockHand from './components/ClockHand'
import { GetTimeString } from './components/functions'
import ThemeButton from './components/ThemeButton'
import * as NavigationBar from 'expo-navigation-bar'
import SimpleWatch from './components/SimpleWatch'
import AnalogueWatch from './components/AnalogueWatch'
const width = Dimensions.get('screen').width

const clockSizeFromWidth: number = width * 0.9
const clockProps: any = {
  clockSizeFromWidth: clockSizeFromWidth,
  borderWidth: clockSizeFromWidth / 80,
  centerWidth: 10,
  hourWidth: clockSizeFromWidth / 30,
  hourLength: clockSizeFromWidth * 0.3,
  minuteWidth: clockSizeFromWidth / 50,
  minuteLength: clockSizeFromWidth * 0.4,
  secondWidth: clockSizeFromWidth / 100,
  secondLength: clockSizeFromWidth * 0.4,
  borderColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  hourColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  minuteColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  secondColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  textColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  backgroundColor: { light: '#f5f5f7', dark: '#000' },
}

export default function App() {
  const [type, setType] = useState<string>('simple')
  const [time, setTime] = useState<number>(
    new Date().getHours() * 3600 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds() +
      new Date().getMilliseconds() / 1000
  )
  const [theme, setTheme] = useState<string>('light')

  function SetTime() {
    const seconds =
      new Date().getHours() * 3600 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds() +
      new Date().getMilliseconds() / 1000
    setTime(seconds)
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      SetTime()
    }, 10)

    return () => {
      clearTimeout(timer)
    }
  }, [time])

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: clockProps.backgroundColor[theme] },
      ]}
    >
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={clockProps.backgroundColor[theme]}
      />
      <ThemeButton
        theme={theme}
        onChange={(value: string) => {
          setTheme(value)
          NavigationBar.setBackgroundColorAsync(
            clockProps.backgroundColor[value]
          )
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (type === 'simple') {
            setType('analogue')
          } else {
            setType('simple')
          }
        }}
        style={{ position: 'absolute', top: 20, left: 20 }}
      >
        <Text style={{ fontSize: width * 0.06 }}>type</Text>
      </TouchableOpacity>
      {type === 'simple' ? (
        <SimpleWatch theme={theme} time={time} />
      ) : (
        <AnalogueWatch theme={theme} time={time} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockTitle: {
    fontSize: clockSizeFromWidth / 5,
    fontWeight: '900',
    position: 'absolute',
    opacity: 0.3,
    zIndex: 10,
  },
  clock: {
    width: clockSizeFromWidth,
    height: clockSizeFromWidth,
    borderRadius: width,
    borderWidth: clockProps.borderWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
