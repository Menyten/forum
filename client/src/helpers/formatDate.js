export default date => {
  const split = date.split('T')
  const lastPart = split[1].split(':')
  lastPart.pop()
  return `${split[0]} ${lastPart.join(':')}`
}