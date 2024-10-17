import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';



const RegistrationSuccess = ({ onClose }) => {
  return (
    <>
    <div className='regsuccess'>
      <button className='closepw' onClick={onClose}>&larr;</button>
      <h5><span><FontAwesomeIcon icon={faCheckCircle}/></span> Registration Successfull</h5>
    </div>
  </>
  )
}

export default RegistrationSuccess
