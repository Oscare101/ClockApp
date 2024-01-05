import { Dimensions, View } from 'react-native'

const width = Dimensions.get('screen').width

export default function ClockSecondHand(props: any) {
  return (
    <View
      style={{
        position: 'absolute',
        height: props.clockProps[`center${props.type}Width`],
        width: props.clockProps[`center${props.type}Width`],
        top:
          (props.clockProps.clockSizeFromWidth -
            props.clockProps.borderWidth * 2) /
            2 -
          props.clockProps[`center${props.type}Width`] / 2,
        left:
          (props.clockProps.clockSizeFromWidth -
            props.clockProps.borderWidth * 2) /
            2 -
          props.clockProps[`center${props.type}Width`] / 2,
        transform: [{ rotate: `${props.angle}deg` }],
        backgroundColor: props.clockProps[`${props.type}Color`][props.theme],
        borderRadius: 10,
      }}
    >
      <View
        style={{
          width: props.clockProps[`${props.type}Width`],
          height: props.clockProps[`${props.type}Length`],
          backgroundColor: props.clockProps[`${props.type}Color`][props.theme],
          position: 'absolute',
          bottom:
            props.clockProps[`center${props.type}Width`] / 2 -
            props.clockProps[`${props.type}Width`] / 2 -
            width * 0.05,
          left:
            props.clockProps[`center${props.type}Width`] / 2 -
            props.clockProps[`${props.type}Width`] / 2,
          // elevation: props.type === 'minute' ? 5 : 0,
          borderWidth: props.type === 'minute' ? 1 : 0,
          borderColor: '#E3E2E7',
          borderRadius: 10,
        }}
      />
    </View>
  )
}
