import axios from "axios";
import { useQuery } from "react-query";
import { useGetUserInfo } from "./useGetUserInfo";
import { BASE_URL } from '../../environment';

export const QUERY_KEY_FOR_DATA = "getdata";

const getData = async ({props, token}) => {
  const url = `${BASE_URL}${props}`;
  const Authorization = token ? `Bearer ${token}` : '';
  
  const config = {
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization
    },
  };
  const res = await axios.get(url, config);
  return res.data;
};

export const useGetData = (props) => {
  const { token } = useGetUserInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_DATA, props],
    () => getData({props, token}),
    {
      onError: (err) => {},
      onSuccess: (data) => {},
    }
  );
  return queryData;
};
