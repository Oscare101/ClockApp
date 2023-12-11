import { View } from 'react-native'

export default function ClockHand(props: any) {
  return (
    <View
      style={{
        position: 'absolute',
        height: props.clockProps.centerWidth,
        width: props.clockProps.centerWidth,
        top:
          (props.clockProps.clockSizeFromWidth -
            props.clockProps.borderWidth * 2) /
            2 -
          props.clockProps.centerWidth / 2,
        left:
          (props.clockProps.clockSizeFromWidth -
            props.clockProps.borderWidth * 2) /
            2 -
          props.clockProps.centerWidth / 2,
        transform: [{ rotate: `${props.angle}deg` }],
      }}
    >
      <View
        style={{
          width: props.clockProps[`${props.type}Width`],
          height: props.clockProps[`${props.type}Length`],
          backgroundColor: props.clockProps[`${props.type}Color`][props.theme],
          position: 'absolute',
          bottom:
            props.clockProps.centerWidth / 2 -
            props.clockProps[`${props.type}Width`] / 2,
          left:
            props.clockProps.centerWidth / 2 -
            props.clockProps[`${props.type}Width`] / 2,
          borderRadius: props.clockProps[`${props.type}Width`],
        }}
      />
    </View>
  )
}
