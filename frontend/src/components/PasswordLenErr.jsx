import React from 'react';
import { X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PasswordLenErr = ({ onClose }) => {
  return (
    <>
      <div className='pwlendiv'>
        <button className='closepw' onClick={onClose}>&larr;</button>
        <h5><span><X/></span> Password Length must be greater than 6 digits</h5>
      </div>
    </>
  );
};

export default PasswordLenErr;
