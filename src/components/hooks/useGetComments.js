import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from '../../environment';

export const QUERY_KEY_FOR_COMMENTS = "getcomment";

const getData = async ({props}) => {
    console.log(props);
  const url = `${BASE_URL}/posts/${props}/comments`;
  
  const config = {
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.get(url, config);
  return res.data.comments;
};

export const useGetComments= (props) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_COMMENTS, props],
    () => getData({props}),
    {
      onError: (err) => {},
      onSuccess: (data) => {},
    }
  );
  return queryData;
};
