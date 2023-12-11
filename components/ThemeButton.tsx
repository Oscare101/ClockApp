import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ThemeButton(props: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        props.onChange(props.theme === 'dark' ? 'light' : 'dark')
      }}
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
      }}
    >
      <Ionicons
        name={props.theme === 'dark' ? 'moon-outline' : 'sunny-outline'}
        size={40}
        color={props.theme === 'dark' ? '#f5f5f7' : '#1d1d1f'}
      />
    </TouchableOpacity>
  )
}
