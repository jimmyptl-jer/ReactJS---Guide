import React from 'react';

const List = (props) => {
  return (
    <>
      {props.peopleList.map((people)=>(
        <article key={people.id} className='person'>
          <img src={people.image} alt={people.name}></img>
          <div>
            <h4>{people.name}</h4>
            <p>{people.age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
