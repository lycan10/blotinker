import axios from 'axios';
import { useMutation } from 'react-query';
import { BASE_URL } from '../../environment';

const like = async ({ id }) => {
  const url = `${BASE_URL}/posts/${id}/like`;
  const config = {
    method: 'GET',
    url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await axios(config);
  return response.data;
};

export const useLikePost = () => {
  return useMutation(
    ({ id }) =>
      like({ id }),
    {
      onError: (err) => {
        console.error('Error creating:', err);
      },
      onSuccess: (data) => {
      },
    }
  );
};
