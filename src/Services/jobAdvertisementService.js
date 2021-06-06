import axios from "axios";

export default class JobAdvertisementService {
  getAllJobAdvertisement() {
    return axios.get("http://localhost:8080/api/jobadvertisement/getall");
  }
  postJobAdvertisement() {
    return axios.post("http://localhost:8080/api/jobadvertisement/add");
  }
  getAllByEmployer(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getAllByEmployer?employerId=" +
        id
    );
  }

  getByDeadlineLessThanEqual(date) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByApplicationDeadlineLessThanEqual?date=" +
        date
    );
  }
  getByTrue() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByIsActiveTrue"
    );
  }
}
