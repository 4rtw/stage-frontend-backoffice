import axios from 'axios'

class MainService {
    getRandomPerson(){
        this.axiosCancelSource = axios.CancelToken.source()
        const url = "https://api.randomuser.me/";
        return axios.get(url, {cancelToken: this.axiosCancelSource.token})
    }
}

export default MainService;
