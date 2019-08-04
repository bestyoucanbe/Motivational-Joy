const remoteURL = "http://localhost:1717"

export default {
  get(id) {
    return fetch(`${remoteURL}/quotes/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/quotes`).then(e => e.json())
  },
  getSpecificInfo(incomingstring) {
    return fetch(`${remoteURL}/${incomingstring}`).then(e => e.json())
  },
  post(newQuote) {
    return fetch(`${remoteURL}/quotes`, {
      method:  "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify(newQuote)
    }).then(data => data.json())
  },
  put(editedQuote) {
    return fetch(`${remoteURL}/quotes/${editedQuote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedQuote)
    }).then(data => data.json());
  }
}