import axios from 'axios';
import { useMutation } from 'react-query';
import { useGetUserInfo } from './useGetUserInfo';
import { BASE_URL } from '../../environment';

const create = async ({ props, token }) => {
  const url = `${BASE_URL}${props.endpoint}`;
    console.log(props);
  const config = {
    method: 'POST',
    url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    data: props,
  };

  const response = await axios(config);
  return response.data;
};

export const useCreate = () => {
  const { token } = useGetUserInfo();
  return useMutation(
    (props) =>
      create({ props, token }),
    {
      onError: (err) => {
        console.error('Error creating:', err);
      },
      onSuccess: (data) => {
      },
    }
  );
};
