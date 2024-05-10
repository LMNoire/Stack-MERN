import React from 'react';
import { LuCheck } from "react-icons/lu";
import PropTypes from 'prop-types';

const Toast = ({ isShown, message, type, onClose }) => {
  return (
    <div>
      <div className="flex items-center gap-3 py-2 px-4">
        <div className=''>
          <LuCheck className="text-xl text-green-500" />
        </div>

        <p className='text-sm text-slate-800'>{message}</p>
      </div>
    </div>
  )
}

Toast.propTypes = {
  isShown: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast
