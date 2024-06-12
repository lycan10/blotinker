import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import banner from "../../assets/main-post.jpg"
import { FaSpinner } from 'react-icons/fa';
import Picker from "emoji-picker-react";
import { toast } from 'react-toastify';
import "./posts.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Link, useLocation } from 'react-router-dom'

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

import { FaRegHeart } from "react-icons/fa";

import { IoEyeOutline } from "react-icons/io5";

import { SlEmotsmile } from "react-icons/sl";

import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"

import { timeAgo, dateFormat } from '../../util/dateFormat';
import { useParams } from 'react-router-dom';
import { useGetData, QUERY_KEY_FOR_DATA } from '../../components/hooks/useGetData';
import { QUERY_KEY_FOR_COMMENTS } from '../../components/hooks/useGetComments';
import { useLikePost } from '../../components/hooks/useLikePost';
import { useCreate } from '../../components/hooks/useCreate';
import { useQueryClient } from "react-query";
import {Loader} from '../../util/loader';
import { Comments } from '../../components/comment/comments';
import { useGetUserInfo } from "../../components/hooks/useGetUserInfo";
import ReactGA from 'react-ga4';

const Posts = () => {
  const location= useLocation()
    const { slug } = useParams();
    const { token }= useGetUserInfo();
    const { data, isLoading, error } = useGetData('/posts/'+slug);
    const { data:recentData, recentLoading, errorRecent } = useGetData('/posts?perPage=3');
    const { mutate, isLoading: likeIsLoading, isError: errorLike, error: likeError } = useLikePost();
    const { mutate: postComment, isLoading: isCommenting, error: commentError } = useCreate();
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const selectedEmoji = emojiObject.emoji;
        setText(prevText => prevText + selectedEmoji);
        setShowPicker(false);
    };
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [slug]);

    const handleLike = () => {
        mutate(
        { id:data?.id },
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: [QUERY_KEY_FOR_DATA],
                });
                toast.success('Post Liked');
            },
            onError:(err)=>{
                toast.success('Error');
            }
        }
        );
      };

      const handleComment = () => {
        postComment(
        { post_id:data?.id, content: text, author: 'Anonymous', endpoint:'/comments'},
        {
            onSuccess: (data) => {
                setText('');
                queryClient.invalidateQueries({
                    queryKey: [QUERY_KEY_FOR_COMMENTS],
                });
                toast.success('comment Posted');
            },
            onError:(err)=>{
                toast.success('Unable to post comment');
            }
        }
        );
      };
      
      return (
        <div>
          {isLoading ? (
            <>
            <Loader />
            </>
          ) : (
            data && (
              <div className="posts">
                <Navbar />
                <div className="post-main">
                  <div className="posts-container">
                    <div className="post-time">
                      <ul>
                        <li>{dateFormat(data?.createdAt)}</li>
                        <span><li></li></span>
                        <li>{data.read_time} read</li>
                        {token && (
                          <Link to={`/admin/createpost?post=${data.slug}`}>
                            <li></li>
                          </Link>
                        )}
                      </ul>
                    </div>
                    <div className="post-header">
                      <h1 className="text-uppercase">{data.title}</h1>
                      {/* <span>{data.excerpt}</span> */}
                      <div className="posts-header-img">
                        <img src={data.imageUrl} alt={data.title} />
                      </div>
                    </div>
                    <div className="post-body">
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                      <div className="post-socials-container">
                        <div className="posts-socials">
                          <Link><FaFacebookF className="posts-socials-space" /></Link>
                          <Link><FaXTwitter className="posts-socials-space" /></Link>
                          <Link><FaInstagram className="posts-socials-space" /></Link>
                          <Link><AiOutlineLink className="posts-socials-space" /></Link>
                        </div>
                        <div className="post-category">
                          <ul>
                            {data.category.map((item, i) => (
                              <li key={i}>{item.name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="post-data-container">
                        <div className="post-data">
                          <div className="post-data-content">
                            <p>{data.views}</p>
                            <span>Views</span>
                          </div>
                          <div className="post-data-content">
                            <p>{data.comments}</p>
                            <span>Comments</span>
                          </div>
                        </div>
                        <div className="post-data">
                          <div className="post-data-content">
                            <p>{data.likes}</p>
                            <span onClick={handleLike}><FaRegHeart className="post-heart" /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent-posts-container">
                    <p>Recent Posts</p>
                    <div className="recent-posts">
                      {recentData && recentData.posts.length > 0 && recentData.posts.map((item) => (
                        <div key={item.id}>
                          <div className="recent-post-image">
                            <img src={item.imageUrl} alt="" />
                          </div>
                          <div className="recent-post-title">
                          <Link to={`/posts/${item.slug}`} className='text-decoration-none text-dark'><h1 className="truncate2">{item.title}</h1></Link>
                          </div>
                          <div className="recent-post-content">
                            <div className="recent-post-data-container">
                              <div className="recent-post-data">
                                <div className="recent-post-data-content">
                                  <IoEyeOutline className="recent-post-socials" />
                                  <p>{item.views}</p>
                                </div>
                                <div className="recent-post-data-content">
                                  <FaRegCommentAlt className="recent-post-social" />
                                  <span>{item.comments}</span>
                                </div>
                              </div>
                              <div className="recent-post-data">
                                <div className="recent-post-data-content">
                                  <p>{item.likes}</p>
                                  <span><FaRegHeart className="post-heart" /></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="recent-posts-mobile">
                      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {recentData && recentData.posts.length > 0 && recentData.posts.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div>
                              <div className="recent-post-image">
                                <img src={item.imageUrl} alt="" />
                              </div>
                              <div className="recent-post-title">
                                <Link to={`/posts/${item.slug}`} className='text-decoration-none text-dark'><h1 className="truncate2">{item.title}</h1></Link>
                              </div>
                              <div className="recent-post-content">
                                <div className="recent-post-data-container">
                                  <div className="recent-post-data">
                                    <div className="recent-post-data-content">
                                      <IoEyeOutline className="recent-post-socials" />
                                      <p>{item.views}</p>
                                    </div>
                                    <div className="recent-post-data-content">
                                      <FaRegCommentAlt className="recent-post-social" />
                                      <span>{item.comments}</span>
                                    </div>
                                  </div>
                                  <div className="recent-post-data">
                                    <div className="recent-post-data-content">
                                      <p>{item.likes}</p>
                                      <span><FaRegHeart className="post-heart" /></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  
                  <div className="post-comments-container">
                    <div className="post-comments-title">
                      <h1>Comments</h1>
                    </div>
                    <div className="post-comments-inputs">
                      <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write a comment..."
                      />
                      <div className="post-comments-emoji">
                        <img
                          className="emoji-icon"
                          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                          onClick={() => setShowPicker((val) => !val)}
                          alt=""
                        />
                        {showPicker && (
                          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
                        )}
                      </div>
                    </div>
                    <button onClick={()=>handleComment()} type='button' className='btn btn-primary btn-sm'>{isCommenting ? <FaSpinner className="spinner-icon" style={{fontSize:'16px'}} /> : "Post Coment"}</button>
                  </div>

                  <Comments id={data.id} />
              </div>
              <Footer />
            </div>
            )
          )}
        </div>
      );
    };
    
export default Posts