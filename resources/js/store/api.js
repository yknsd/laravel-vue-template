import axios from "axios"

export default {
    get(url, option) {
        console.log("url: ", url, " option:", option);
        let res = axios.get(url, option);
        console.log("response:", res);
        return res;
    },
    post(url, body) {
        let params = new URLSearchParams();
        body.map(function (value, index) {
            params.append(value, index);
        })
        console.log("url: ", url, " params:", params);
        return axios.post(url, params).then(res => {
                console.log("response:", res);
            }
        );
    }
}
