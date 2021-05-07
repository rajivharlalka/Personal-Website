import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";

const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className='Header'>
        <h1>{`Hey There, I'm ${header.name}`}</h1>
        
        <HeaderButton />
      </div>
      <img
        id='not-dark'
        onClick={scrollTo}
        alt='Contact Me'
        title='Contact Me'
        className='gtp'
        src='profile1.png'
      ></img>
    </div>
  );
};

export default Header;
