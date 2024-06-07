import axios from "axios";
import { BASE_URL } from '../environment';

export const handleDelete = async ({
  id,
  token,
  deleteEndPointUrl,
}) => {
  const url = `${BASE_URL}/${deleteEndPointUrl}/${id}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(url, config);
  return response;
};
