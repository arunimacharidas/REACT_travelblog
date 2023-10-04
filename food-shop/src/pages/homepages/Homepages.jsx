import React from 'react'; 
import Header from '../../header/header'; 
import Sidebar from '../../sidebar/sidebar'; 
import Post from '../../post/post'; 
import './homepages.css';

export default function Homepages() { 
  return (
    <>
      <Header /> 
      <div className='home'>
        <Sidebar /> 
        <Post /> 
      </div>
    </>
  );
}


