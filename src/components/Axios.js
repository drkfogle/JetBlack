import axios from 'axios';

const instance = axios.create({
  baseURL: "https://us-central1-jetblack-project.cloudfunctions.net/api"

  // "http://localhost:5001/jetblack-project/us-central1/api"
})

export default instance