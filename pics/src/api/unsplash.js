import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ee4e75a842cf172bdbd0e98e736755a0ff1afec1c5578f5870fd54d0c6491afc"
  }
});
