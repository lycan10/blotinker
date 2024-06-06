import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { IoIosHome } from "react-icons/io";
import { MdPostAdd } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useGetCategory, QUERY_KEY_FOR_CATEGORY } from '../../../components/hooks/useGetCategory';
import CreateCategory from '../../../components/categorycards/createCategory';
import { useQueryClient } from 'react-query';

const Sidebar = ({ showOffcanvas, handleViewChange, navigateToHome }) => {
  const { data, isLoading, error } = useGetCategory({});
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const queryClient = useQueryClient();
  const handleCloseModal = () => {
    setShowModal(false);
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY_FOR_CATEGORY],
    });
  };
  return (
    <div className={`adminpage-left ${showOffcanvas ? 'open' : ''}`}>
      <div className="adminpage-logo" onClick={navigateToHome}>
        <h1>Blotink</h1>
      </div>
      <div className="adminpage-analytics">
        <h3><Link className="text-decoration-none text-dark" to={`/admin`}>Dashboard</Link></h3>
      </div>
      <div className="adminpage-general">
        <div className="adminpage-home" onClick={navigateToHome}>
          <IoIosHome className='admin-home-icon' />
          <h3>Home</h3>
        </div>
        <div className="adminpage-categories">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="adminpage-accordion-title">
                  <MdPostAdd />
                  <p>Posts</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="adminpage-categories-accordion">
                  <Link className="text-decoration-none" to="/admin/saved-draft">Saved Draft</Link>
                </div>
                <div className="adminpage-categories-accordion">
                  <Link className="text-decoration-none" to="/admin/published-posts">Published Posts</Link>
                </div>
                <div className="adminpage-categories-accordion">
                  <Link className="text-decoration-none" to="/admin/createpost">Create post</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="adminpage-accordion-title">
                  <TbCategoryPlus />
                  <p>Categories</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
              {data && data?.map((category) => (
                <div className="adminpage-categories-accordion" onClick={() => handleViewChange("featuredpost")}>
                  <Link className="text-decoration-none" to={`/admin/category?id=${category.id}`}>{category.name}</Link>
                </div>
              ))}
                <div className="adminpage-categories-accordion" onClick={handleShowModal}>
                  <p>Create new category</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <CreateCategory showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Sidebar;
