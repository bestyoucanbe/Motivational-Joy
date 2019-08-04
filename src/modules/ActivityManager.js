const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/activities/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/activities`).then(e => e.json())
  },
  getSpecificInfo(incomingstring) {
    return fetch(`${remoteURL}/${incomingstring}`).then(e => e.json())
  },
  post(newActivity) {
    return fetch(`${remoteURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newActivity)
    }).then(data => data.json())
  },
  put(putActivity) {
    return fetch(`${remoteURL}/activities/${putActivity.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putActivity)
    }).then(data => data.json())
  }
}
