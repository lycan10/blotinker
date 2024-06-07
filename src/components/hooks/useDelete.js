import { useMutation, useQueryClient } from "react-query";
import { useGetUserInfo } from "./useGetUserInfo";
import { handleDelete } from "../../util/handleDelete";
import { toast } from 'react-toastify';


export const useDelete = ({ deleteEndPointUrl, queryKey }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(handleDelete);
  const { token } = useGetUserInfo();

  const removeData = (id) => {
    mutate(
      { id, token, deleteEndPointUrl },
      {
        onError: (err) => {
          toast.error(err.response.data.message || 'Unable to delete');
        },
        
        onSuccess: (res) => {
          toast.success('Deleted Successfully');
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
      }
    );
  };

  return { removeData };
};
