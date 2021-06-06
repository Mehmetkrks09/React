import axios from "axios"

export default class EmployerService{

    getEmployeer(){
return  axios.get("http://localhost:8080/api/employers/getall")
    }
postEmployer(){

return axios.post("http://localhost:8080/api/employers/register")

}

}