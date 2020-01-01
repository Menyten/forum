const myFetch = {
  baseUrl: 'http://localhost:3000',

  headers: {
    'Content-Type': 'application/json'
  },

  async get(url) {
    const res = await fetch(url)
    return await res.json()
  },

  async post(url, body) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  },

  async put(url, body) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  },
}

export default myFetch