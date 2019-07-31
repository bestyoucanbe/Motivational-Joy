const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/ideas/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/ideas`).then(e => e.json())
  }
}