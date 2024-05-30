import axios from 'axios';
import { useMutation } from 'react-query';
import { useGetUserInfo } from './useGetUserInfo';
import { BASE_URL } from '../../environment';

const savePost = async ({ postId, title, content, featuredImage, postCategories, status, token }) => {
  const url = `${BASE_URL}/posts${postId ? `/${postId}` : ''}`;
  const method = postId ? 'PATCH' : 'POST';
  const body = { title, content, image_url:featuredImage, category_ids: postCategories, status: status };
    console.log(body);
  const config = {
    method,
    url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    data: body,
  };

  const response = await axios(config);
  return response.data;
};

export const useSavePost = () => {
  const { token } = useGetUserInfo();
  return useMutation(
    ({ postId, title, content, featuredImage, postCategories, status }) =>
      savePost({ postId, title, content, featuredImage, postCategories, status, token }),
    {
      onError: (err) => {
        console.error('Error saving post:', err);
      },
      onSuccess: (data) => {
        //console.log('Post saved successfully:', data);
      },
    }
  );
};
