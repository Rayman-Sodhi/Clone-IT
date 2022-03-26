import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-github-c5c88.cloudfunctions.net/amazonStripeApi'
})

export const source = axios.CancelToken.source();

export default instance;