import axios from "axios"

export default class SchoolService{

    postSchool(){
        return axios.post("http://localhost:8080/api/cv/school/add")
    } 

    getByGrudutionYear(){
        return axios.get("http://localhost:8080/api/cv/school/ByGrudutionYear")
    }
}