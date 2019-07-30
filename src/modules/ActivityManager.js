const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/activities/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/activities`).then(e => e.json())
  }
}