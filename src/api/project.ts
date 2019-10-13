import axios from "axios";

import { ProjectType } from "../components/Project";

export const fetchProjectData = () => {
  return axios.get<Array<ProjectType>>("/api/project");
};
