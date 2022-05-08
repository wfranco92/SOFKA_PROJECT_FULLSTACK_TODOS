import React from 'react';
import './CreateUserButton.css';

function CreateUserButton(props) {
  const onClickButton = () => {
    props.setOpenModalUser(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <button
        className="CreateUserButton"
        onClick={onClickButton}
      >
        + 
      </button>
      <span className='LableButtonUser'> Add User</span>
    </React.Fragment>

  );
}

export { CreateUserButton };
