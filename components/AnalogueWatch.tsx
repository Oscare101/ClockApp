import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ClockHand from './ClockHand'
import { GetTimeString } from './functions'
import ClockSecondHand from './ClockSecondHand'

const width = Dimensions.get('screen').width

const clockSizeFromWidth: number = width * 0.9

const clockProps: any = {
  clockSizeFromWidth: clockSizeFromWidth,
  borderWidth: clockSizeFromWidth * 0.03,
  borderHeight: clockSizeFromWidth * 0.007,
  centerWidth: clockSizeFromWidth * 0.04,
  centersecondWidth: clockSizeFromWidth * 0.03,
  centerminuteWidth: clockSizeFromWidth * 0.04,
  centerhourWidth: clockSizeFromWidth * 0.04,

  hourWidth: clockSizeFromWidth * 0.02,
  hourLength: clockSizeFromWidth * 0.4,
  minuteWidth: clockSizeFromWidth / 50,
  minuteLength: clockSizeFromWidth * 0.49,
  secondWidth: clockSizeFromWidth * 0.008,
  secondLength: clockSizeFromWidth * 0.5,
  borderColor: { light: '#E3E2E7', dark: '#E3E2E7' },
  hourColor: { light: '#000000', dark: '#000000' },
  minuteColor: { light: '#FFFFFF', dark: '#FFFFFF' },
  secondColor: { light: '#FE0D06', dark: '#FE0D06' },
  textColor: { light: '#1d1d1f', dark: '#bfbfbf' },
  backgroundColor: { light: '#FCFCFC', dark: '#FCFCFC' },
}
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function AnalogueWatch(props: any) {
  return (
    <View
      style={[
        styles.clock,
        {
          backgroundColor: clockProps.backgroundColor[props.theme],
          borderColor: clockProps.borderColor[props.theme],
        },
      ]}
    >
      <Text
        style={{
          position: 'absolute',
          top: '25%',
          fontSize: width * 0.05,
          fontWeight: '500',
          opacity: 0.7,
        }}
      >
        {new Date().getDate()} {months[new Date().getMonth() + 1]}
      </Text>
      <View
        style={{
          width: width * 0.2,
          height: width * 0.2,
          borderRadius: width * 0.2,
          borderWidth: 1,
          borderColor: '#E3E2E7',
          position: 'absolute',
          left: '15%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {[...Array(7)].map((_: any, index: number) => (
          <View
            key={index}
            style={{
              width: width * 0.2 * 0.95,
              transform: [{ rotate: `${(360 * index) / 7}deg` }],
              // height: 10,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                transform: [{ rotate: `-90deg` }],
                color: new Date().getDay() === index ? 'red' : '#666',
              }}
            >
              {days[index]}
            </Text>
          </View>
        ))}
      </View>
      <ClockSecondHand
        type="hour"
        clockProps={clockProps}
        angle={(360 * ((props.time / 60 / 60) % 12)) / 12}
        theme={props.theme}
      />
      <ClockSecondHand
        type="minute"
        clockProps={clockProps}
        angle={(360 * ((props.time / 60) % 60)) / 60}
        theme={props.theme}
      />
      <ClockSecondHand
        type="second"
        clockProps={clockProps}
        angle={(360 * (props.time % 60)) / 60}
        theme={props.theme}
      />
      {[...Array(30)].map((_: any, index: number) => (
        <View
          key={index}
          style={{
            width: clockSizeFromWidth,
            transform: [{ rotate: `${(180 * index) / 30}deg` }],
            height: 10,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: clockProps.borderWidth * 0.9,
          }}
        >
          {[...Array(2)].map((_: any, index: number) => (
            <View
              key={index}
              style={{
                width: clockProps.borderWidth,
                height: clockProps.borderHeight,
                backgroundColor: clockProps.borderColor[props.theme],
                borderBottomRightRadius: index ? 0 : clockProps.borderWidth,
                borderBottomLeftRadius: index ? clockProps.borderWidth : 0,
                borderTopRightRadius: index ? 0 : clockProps.borderWidth,
                borderTopLeftRadius: index ? clockProps.borderWidth : 0,
              }}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
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
