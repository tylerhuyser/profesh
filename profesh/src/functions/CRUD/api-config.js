import axios from 'axios'

let apiUrl

const apiUrls = {
    production: `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/`,
    development: `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/`
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
})

export default api