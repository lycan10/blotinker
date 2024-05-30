import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import off from "../../assets/slide.png";
import { IoAdd } from "react-icons/io5";
import { BASE_URL } from '../../environment';
import { Popover, OverlayTrigger, Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./createpost.css";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { useGetUserInfo } from "../../components/hooks/useGetUserInfo";
import { GiQuillInk } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import JoditEditor from 'jodit-react';
import { useUploadFile } from '../../components/hooks/useUploadFile';
import { useSavePost } from '../../components/hooks/useSavePost';
import { timeAgo } from '../../util/dateFormat';
import { IoIosHome } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Categories } from 'emoji-picker-react';
import { useGetData } from '../../components/hooks/useGetData';
import { useQueryClient } from "react-query";
import { useGetCategory, QUERY_KEY_FOR_CATEGORY} from '../../components/hooks/useGetCategory';
import CreateCategory from '../../components/categorycards/createCategory';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSignOut } from 'react-auth-kit';

const CreatePost = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const postFromParams = searchParams.get('post');
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const { userInfo }= useGetUserInfo();
  const signOut = useSignOut
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState(null);
  const [postCategories, setPostCategories] = useState([]);
  const [featuredImage, setFeaturedImage] = useState('');
  const { mutate: savePost, isLoading: saving, isError: isSavingError, error: savingError } = useSavePost();
  const { mutate: uploadFile, isLoading, isError, error } = useUploadFile();
  const fileInputRef = useRef(null);
  const { data:postData, isLoading: postLoading, error: postError } = useGetData('/posts/'+postFromParams);
  const { data:categoriesData, isLoading: catLoading, error:catError } = useGetCategory({});
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY_FOR_CATEGORY],
  });
  };

  useEffect(() => {
    if (postData) {
      setPost(postData);
      setContent(postData.content);
      setTitle(postData.title);
      setPostId(postData.id);
      setPostCategories(postData.category.map(category => category.id));
      const parsedUrl = new URL(postData.imageUrl);
      const pathname = parsedUrl.pathname;
      const file = pathname.substring(pathname.lastIndexOf('/') + 1);
      setFeaturedImage(file);
    }
  }, [postData]);

  const config = {
    readonly: false,
    height: 600,
    toolbarAdaptive: true,
    toolbarSticky: true,
  };

  const handleSavePost = ({status}) => {
    if (title && content && featuredImage) {
      savePost(
        { postId, title, content, featuredImage, postCategories, status },
        {
          onSuccess: (data) => {
            setPostId(data.post.id);
            setSearchParams({ post: data.post.slug });
            setPost(data.post);
            toast.success(status == 'draft' ?'Saved to draft': 'Published');
          },
          onError:(err)=>{
            toast.error('unable to save post');
          }
        }
      );
    }else{
      toast.error('Please ensure that title, content and featured image are set');
    }
  };

 /* useEffect(() => {
    const interval = setInterval(() => handleSavePost(post && post?.status ? {status: post?.status}: {status:'draft'}), 60000);
    return () => clearInterval(interval);
  }, [content, postId, featuredImage]);*/

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(
        { file },
        {
          onSuccess: (data) => {
            const fileUrl = data.url;
            setFeaturedImage(fileUrl);
          },
          onError:(err)=>{
            toast.error('upload failed');
          }
        }
      );
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;
    const id = parseInt(value, 10);

    if (checked) {
      setPostCategories((prev) => [...prev, id]);
    } else {
      setPostCategories((prev) =>
        prev.filter((categoryId) => categoryId !== id)
      );
    }
  };

  const popover = (
    <Popover id="categories-popover">
      <Popover.Header as="h3">Select Categories</Popover.Header>
      <Popover.Body>
        <Form>
          {categoriesData && categoriesData?.map((category) => (
            <Form.Check
              key={category.id}
              type="checkbox"
              label={category.name}
              name={category.name}
              value={category.id}
              onChange={handleCheckboxChange}
              checked={postCategories.includes(category.id)}
            />
          ))}
        </Form>
      </Popover.Body>
    </Popover>
  );


  return (
    <div className='createpost'>
      <div className="createpost-container">
        <div className="createpost-navbar">
          <div className="createpost-navbar-left">
            <IoIosHome className='createpost-navbar-icon' onClick={() => navigate('/')} />
          </div>
          <div className="createpost-navbar-left">
            <h1>Create post</h1>
          </div>
          <div role="button" className="createpost-navbar-left"  onClick={() => handleSavePost({status: 'draft'})}>
            <p>Save draft</p>
            <div className="createpost-view"></div>
            <div className="createpost-publish" role="button" onClick={() => handleSavePost({status: 'published'})}>
              <p>Publish</p>
            </div>
            <div className="createpost-offcanvas-img" onClick={toggleOffcanvas}>
              <BsReverseLayoutSidebarReverse className='canvas-icon' />
            </div>
            <div role="button" className="ps-4" onClick={()=>signOut()}>
              <p className='text-danger'>Logout</p>
            </div>
            
          </div>
        </div>
        <div className="createpost-body-container">
          <div className="createpost-body-input-container">
            <div className="createpost-body-input-title">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Add title'
                value={title}
              />
            </div>
            <div className="createpost-body-input">
              <JoditEditor
                value={content}
                config={config}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => {}}
              />
            </div>
            <div className="createpost-add-new-post">
              <div className="createpost-new-button">
                <IoAdd className='createpost-new-button-icon' />
              </div>
            </div>
          </div>
          <div className={`createpost-offcanvas ${showOffcanvas ? 'show' : ''}`}>
            <div className="offcanvas-container">
              <div className="offcanvas-top">
                <h3>{ saving ? <><FaSpinner className="spinner-icon" style={{fontSize:'16px'}} /> Saving post</> : "Post"}</h3>
                <IoCloseOutline className='offcanvas-icon' onClick={toggleOffcanvas} />
              </div>
              <div className="offcanvas-title-container">
                <div className="offcanvas-title">
                  <GiQuillInk className='offcanvas-icon' />
                  <h3>{title ? title : "No Title"}</h3>
                </div>
                {post && <p>Last edited {timeAgo(post.updatedAt)}.</p>}
              </div>
              <div className="offcanvas-summary">
                <h3>Content</h3>
                <div
                  className="offcanvas-summary-image"
                  onClick={handleDivClick}
                  style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${BASE_URL+'/uploads/'+featuredImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '150px',
                    height: '150px',
                  }}
                >
                  {!featuredImage ? 'Set featured image' : isLoading ? <><FaSpinner className="spinner-icon" style={{fontSize:'16px'}} /> Uploading</> : <p>Set featured image</p>}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                {isError && <p className='fs-6 text-danger'>Error: {error.message}</p>}
                <div className="offcanvas-summary-body-container">
                  <div className="offcanvas-summary-body">
                    <p>Visibility</p>
                    <p><span>Public</span></p>
                  </div>
                  <div className="offcanvas-summary-body">
                    <p>Publish</p>
                    <p><span>Immediately</span></p>
                  </div>
                  <div className="offcanvas-summary-body">
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                      <button class="btn btn-sm btn-light btn-block">Category <BsChevronDown /></button>
                    </OverlayTrigger>
                  </div>
                    <div className='border rounded p-2'>
                    <button class="btn btn-sm btn-link" onClick={handleShowModal}>New Category</button>
                      { 
                        postCategories.map((categoryId) => (
                        <div key={categoryId}>
                         <h6 style={{fontSize:'12px'}}> {
                            categoriesData?.find((category) => category.id === categoryId)
                              ?.name
                          }
                          </h6>
                          </div>
                      ))}
                    </div>
                    
                  <div className="offcanvas-summary-body">
                    <p>URL</p>
                    {post && <p><Link to={'/posts/'+post?.slug}>{post?.slug}</Link></p>}
                  </div>
                  <div className="offcanvas-summary-author">
                    <p>AUTHOR </p>
                    <p>{userInfo.name}</p>
                  </div>
                </div>
              </div>
              <div className="offcanvas-preview-container">
                { post &&
                  <Link to={'/posts/'+post?.slug} className="offcanvas-preview-button text-decoration-none text-dark">
                    <IoEyeSharp className='offcanvas-preview-icon text-dark' />
                    <p className='text-dark'>Preview</p>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateCategory showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default CreatePost;
