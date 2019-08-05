const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/photos/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/photos`).then(e => e.json())
  },
  getSpecificInfo(incomingstring) {
    return fetch(`${remoteURL}/${incomingstring}`).then(e => e.json())
  },
  post(newPhoto) {
    return fetch(`${remoteURL}/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhoto)
    }).then(data => data.json())
  },
  put(putPhoto) {
    return fetch(`${remoteURL}/photos/${putPhoto.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putPhoto)
    }).then(data => data.json())
  },
  delete(deletePhoto) {
    return fetch(`${remoteURL}/photos/${deletePhoto.id}`, {
      method: "DELETE"
    }).then(e => e.json())
  }
}
