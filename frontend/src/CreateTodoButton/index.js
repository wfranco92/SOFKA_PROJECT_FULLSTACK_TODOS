import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
      <span className='LableButtonTask'> Add Task</span>
    </React.Fragment>

  );
}

export { CreateTodoButton };
