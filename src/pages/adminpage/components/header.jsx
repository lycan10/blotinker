import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo1 from "../../../assets/a1.png";
import { useSignOut } from 'react-auth-kit';

const Header = ({ toggleOffcanvas }) => {
  const signOut = useSignOut();

  return (
    <div className="adminpage-right-navbar">
      <div className="adminpage-right-hamburger" onClick={toggleOffcanvas}>
        <RxHamburgerMenu />
      </div>
      <div className="adminpage-right-user-container">
        <div className="adminpage-right-user">
          <img src={logo1} alt="User" />
        </div>
        <h3>Admin</h3>
        <div role="button" className="ps-4" onClick={() => signOut()}>
          <p className='text-danger'>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
