import axios from "axios";

export default class HttpRequest{
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000'
        }) ;
    
    }


    post(url,data){
        return this.axios.post(url, data);
    }

    get(url) {
        return this.axios.get(url)
    }

    put(url,data) {
        return this.axios.put(url,data)
    }

    delete(url) {
        return this.axios.delete(url)
    }

}