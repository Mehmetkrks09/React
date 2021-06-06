import axios from "axios"

export default class CvService {

getJobSeekerId(id){
    return axios.get("http://localhost:8080/api/cv/getByJobSeekerId?jobSeekerId="+id)
}
postCv(){
    return axios.post("http://localhost:8080/api/cv/add")
}
postCvPhoto(id,Photo){
    return axios.post("http://localhost:8080/api/cv/imageUpload?curriculumVitaeId="+id)
}
}