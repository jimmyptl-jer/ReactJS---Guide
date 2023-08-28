import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

  const tourListRender = props.toursList.map((tour)=>{
    return <Tour onClick={props.onClick} key={tour.id} {...tour}/>
  })

  return(
    <section>
      <div>
        <h2>Tours List</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tourListRender}
      </div>
    </section>
  );
};

export default Tours;
