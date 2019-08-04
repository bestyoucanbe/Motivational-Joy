const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/ideas/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/ideas`).then(e => e.json())
  },
  getSpecificInfo(incomingstring) {
    return fetch(`${remoteURL}/${incomingstring}`).then(e => e.json())
  },
  post(newIdea) {
    return fetch(`${remoteURL}/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newIdea)
    }).then(data => data.json())
  },
  put(putIdea) {
    return fetch(`${remoteURL}/ideas/${putIdea.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putIdea)
    }).then(data => data.json())
  }
}
