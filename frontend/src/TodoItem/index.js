import React from 'react';
import './TodoItem.css';
import check from '../assets/img/icon-check.png'
import checked from '../assets/img/icon-checked.png'
import close from '../assets/img/cerrar.png'

function TodoItem(props) {

  const onclick = (e) => {
    if (e.target.src === check) {
      e.target.src = checked;
      console.log(e.target.src)
    } else {
      e.target.src = check;
    }
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <img src={check} alt="icon check" className="icon-check" onClick={onclick} />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <img src={close} alt="icon check" className="icon-check" />
      </span>
    </li>
  );
}

export { TodoItem };
