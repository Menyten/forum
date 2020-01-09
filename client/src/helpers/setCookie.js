export default (value, d = new Date()) => {
  const date = new Date(d.setFullYear(d.getFullYear() + 1))
  document.cookie = `access_token=${value}; expires=${date.toUTCString()}`
}