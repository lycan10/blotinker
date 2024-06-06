import axios from "axios";
import { useQuery } from "react-query";
import { useGetUserInfo } from "./useGetUserInfo";
import { BASE_URL } from '../../environment';

export const QUERY_KEY_FOR_CATEGORY = "getcategory";

const getData = async ({props, token}) => {
  const url = `${BASE_URL}/category`;
  const Authorization = token ? `Bearer ${token}` : '';
  
  const config = {
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization
    },
  };
  const res = await axios.get(url, config);
  return res.data.categories;
};

export const useGetCategory = (props) => {
  const { token } = useGetUserInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_CATEGORY, props],
    () => getData({props, token}),
    {
      onError: (err) => {},
      onSuccess: (data) => {},
    }
  );
  return queryData;
};
