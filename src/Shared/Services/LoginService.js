import axios from "axios";

class LoginService{
    login(email, password) {
        this.axiosCancelSource = axios.CancelToken.source();
        const url = 'https://reqres.in/api/login';
        return axios.post(url, {email, password}, {cancelToken: this.axiosCancelSource.token});
    }
}

export default LoginService;
