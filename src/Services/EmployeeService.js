import axios from "axios"

export default class EmployeeService{

getAllEmployee(){
    return axios.get("http://localhost:8080/api/employees/getAll")
}
postEmployee(){
    return axios.post("http://localhost:8080/api/employees/register")
}


}