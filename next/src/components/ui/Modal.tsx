'use client';

import React from 'react';

interface IModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  success: boolean;
};

export const Modal = ({isOpen = false, title = "", description = "", success = false}: IModalProps) => {
  return isOpen && (
    <div className='fixed inset-0 backdrop-brightness-50 z-50 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-4 min-w-[40%] min-h-[40%] p-4 rounded-xl shadow-lg bg-light'>
        <h1 className={`text-center text-5xl font-bold ${ success ? 'text-green-500': 'text-red-500' }`}>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
      </div>
    </div>
  )
}

export default Modal