import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const IncorrectUserPw = ({ onClose }) => {
  return (
    <>
      <div className='pwlendivuser'>
        <button className='closepw' onClick={onClose}>&larr;</button>
        <h5><span>!</span> Invalid Username and Password</h5>
      </div>
    </>
  )
}

export default IncorrectUserPw
