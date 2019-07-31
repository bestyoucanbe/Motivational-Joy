const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/quotes/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/quotes`).then(e => e.json())
  }
}