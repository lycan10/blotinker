import axios from "axios";
import { BASE_URL } from '../../environment';

export const loginUser = async (props) => {
  const url = `${BASE_URL}/user/login`;
  const data = { ...props };
  const response = await axios.post(url, data);
  return response.data;
};
