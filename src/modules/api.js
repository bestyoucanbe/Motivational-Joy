const DEVELOPMENT_API_URL = "http://localhost:1717"
const PRODUCTION_API_URL = "https://motivation-joy.herokuapp.com"
const ENVIRONMENT = process.env.NODE_ENV

let apiUrl

if (ENVIRONMENT === "development") {
    apiUrl = DEVELOPMENT_API_URL
}
else {
    apiUrl = PRODUCTION_API_URL
}

export { apiUrl }