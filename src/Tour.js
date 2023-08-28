import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';

const Tour = (props) => {
  return (
    <article className='single-tour'>
      <img src={props.image} alt={props.name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{props.name}</h4>
          <h4 className='tour-price'>{props.price}</h4>
        </div>
        <p>
          {props.info}
        </p>

        <button className='delete-btn' onClick={props.onClick}>
          Not Interested
        </button>
      </footer>
    </article>
  )
};

export default Tour;
