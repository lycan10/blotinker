import axios from 'axios';
import { useMutation } from 'react-query';
import { useGetUserInfo } from './useGetUserInfo';
import { BASE_URL } from '../../environment';

const uploadFile = async ({ file, token }) => {
  const url = `${BASE_URL}/images/upload`;
  const Authorization = token ? `Bearer ${token}` : '';

  const formData = new FormData();
  formData.append('image', file);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization,
    },
  };

  const res = await axios.post(url, formData, config);
  return res.data;
};

export const useUploadFile = () => {
  const { token } = useGetUserInfo();
  return useMutation(
    ({ file }) => uploadFile({ file, token }),
    {
      onError: (err) => {
        console.error('Error uploading file:', err);
      },
      onSuccess: (data) => {
        console.log('File uploaded successfully:', data);
      },
    }
  );
};
