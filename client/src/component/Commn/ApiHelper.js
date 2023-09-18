import axios from "axios"

class ApiHelper {
    constructor() {
        this.baseUrl = "http://localhost:5000";
    }


    // Product 
    getProduct() {
        return axios.get(`${this.baseUrl}/product/`,
         {
            withCredentials: true,
        }
        )
    }
    getProductById(id) {
        return axios.post(`${this.baseUrl}/product/${id}`)
    }


    // User 
    registerUser(userData) {
       
        return axios.post(`${this.baseUrl}/user/createuser`, userData,{ withCredentials: true});
    }

    loginUser(userData) {
        return axios.post(`${this.baseUrl}/user/loginUser`, userData,{ withCredentials: true});
    }






}
const apiHelper = new ApiHelper();
export default apiHelper


