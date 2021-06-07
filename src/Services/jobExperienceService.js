import axios from "axios"

export default class JobExperienceService{

    getByGrudutionYear(){
        return axios.get("http://localhost:8080/api/cv/jobExperience/ByGrudutionYear")
    }

}