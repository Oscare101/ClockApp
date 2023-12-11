export function GetTimeString(time: number, type: string) {
  const types: any = {
    hour: Math.floor((time / 60 / 60) % 12),
    minute: Math.floor((time / 60) % 60),
    second: Math.floor(time % 60),
  }
  const result: number = types[type]
  return result.toString().padStart(2, '0')
}
