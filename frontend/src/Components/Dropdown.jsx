import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css';  // Custom CSS file for styling

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleAction = (action) => {
    setSelectedOption(action);

    switch (action) {
      case 'switch':
        toast.success('You selected Switch User');
        break;
      case 'logout':
        toast.error('You selected Logout');
        break;
      default:
        break;
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-item">
        <div className="menu-options">
          <div className="menu-option">
            <p>John deo</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" alt="" />
          </div>
          <div className="menu-option" onClick={() => handleAction('switch')}>
            Switch User
          </div>
          <div className="menu-option" onClick={() => handleAction('logout')}>
            Logout
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DropdownMenu;
