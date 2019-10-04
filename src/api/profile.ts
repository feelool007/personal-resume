import axios from "axios";

import { ProfileType } from "../components/ProfileCard";

export const fetchProfileData = () => {
  return axios.get<ProfileType>("/api/profile");
};
