import Axios from "axios";

export default class RestDataSource {
    constructor(base_url, errorCallback) {
       

        Axios.defaults.headers.common["Tokentype"] =
            localStorage.getItem("Tokentype") === null
                ? "jti"
                : localStorage.getItem("Tokentype");
        Axios.defaults.headers.common["jtitoken"] =
            localStorage.getItem("jti-token") === null
                ? ""
                : localStorage.getItem("jti-token");
        Axios.defaults.headers.common["token"] =
            localStorage.getItem("jwt-token") === null
                ? ""
                : localStorage.getItem("jwt-token");
        Axios.defaults.headers.common["ApplicationId"] = "11101";
        Axios.defaults.headers.common["BuId"] = "1";
        Axios.defaults.headers.common["SubBuId"] = "0";
        Axios.defaults.headers.common["Environment"] = "dev";
        Axios.defaults.headers.common["issuer"] = "EPI";
        Axios.defaults.headers.common["Content-Type"] =
            "application/json;charset=UTF-8";

        
        Axios.defaults.headers.common["userId"] = "1212"
        Axios.defaults.headers.common["userlogin"] = "mayur@gmail.com"
       
        this.BASE_URL = base_url;
        this.handleError = errorCallback;
    }

    async GetData(callback) {
        this.SendRequest("get", this.BASE_URL, callback);
    }
    async GetOneByParam(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}?${id}`, callback);
    }
    async GetOne(data, callback) {
        this.SendRequest("get", this.BASE_URL, callback, data);
    }
    
    async Store(data, callback) {

        this.SendRequest("post", this.BASE_URL, callback, data);
    }
    async Update(data, callback) {
        this.SendRequest("put", this.BASE_URL, callback, data);
    }
    async Delete(data, callback) {

        this.SendRequest("delete", this.BASE_URL, callback, data);
    }
    async SendRequest(method, url, callback, data) {
        try {
            let response = await Axios.request({
              
                method: method,
                url: url,
                data: data,
            });
            callback(response);
        } catch (err) {
            console.log(err);
            
        }
    }
}
