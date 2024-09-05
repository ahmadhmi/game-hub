import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "8d7e4e72c84b439e91835403201e8072"
    }
})