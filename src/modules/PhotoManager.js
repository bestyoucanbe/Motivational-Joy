const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/photos/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/photos`).then(e => e.json())
  }
}