import axios from "axios";

import { ResumeContentType } from "../components/Resume";

export const fetchResumeData = () => {
  return axios.get<ResumeContentType>("/api/resume");
};
