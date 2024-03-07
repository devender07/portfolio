import React from 'react';
import "./Button.css";

export const ResumeButton = () => {
  const handleClick = () => {
    // Open the resume view in a new tab
    window.open('https://drive.google.com/file/d/1x4X9A2XCS2ivFrI6c700a8crF6KNltnd/view?usp=sharing', '_blank');
  };

  return (
    <button className='btn text-xl md:text-xl h-[50px] w-[175px] font-semibold bg-green-600 tracking-widest' onClick={handleClick}>
      Resume
    </button>
  );
};

export const DownloadButton = () => {
  const handleClick = () => {
    // Initiate download in a new tab
    window.open('https://drive.usercontent.google.com/u/0/uc?id=1x4X9A2XCS2ivFrI6c700a8crF6KNltnd&export=download', '_blank');
  };

  return (
    <button className='downloadbtn h-[50px] w-[50px]' onClick={handleClick}>
    </button>
  );
};
