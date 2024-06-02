import React from 'react';
import { useGetComments } from '../../components/hooks/useGetComments';
import user from '../../assets/user.webp';
import { timeAgo } from '../../util/dateFormat';

export const Comments = ({id}) => {
    const { data, isLoading, error } = useGetComments(id);

  return (
    <div>
        <div class="container">
            <div className="row">
                { data && data?.length > 0 && data.map((comment, i)=>(
                <div className="col-md-12">
                    <div className="media g-mb-30 media-comment" key={i}>
                        <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src={user} alt="Image Description"/>
                        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div className="g-mb-15">
                            <h5 className="h5 g-color-gray-dark-v1 mb-0">{comment.author}</h5>
                            <span className="g-color-gray-dark-v4 g-font-size-12">{timeAgo(comment.createdAt)}</span>
                        </div>
                        <p>{comment.content}</p>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
        </div>
    </div>
  );
};