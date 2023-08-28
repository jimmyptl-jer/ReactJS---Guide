import React from 'react';

const Categories = (props) => {

  const filterHandler = () => {
    props.filterItems('breakfast')
  }

  const categoryList = props.categories.map((category,index) => {
    return (
      <button 
        type='button' 
        className='filter-btn'
        key={index}
        onClick={()=> props.filterItems(category)}>
          {category}
        </button>
    )
  })

  return (
    <div className='btn-container'>
      {categoryList}
      {/* <button
        className='filter-btn'
        onClick={() => props.filterItems('all')}>
        Home
      </button>
      <button
        className='filter-btn'
        onClick={filterHandler}>
        Breakfast
      </button>

      <button
        className='filter-btn'
        onClick={() => props.filterItems('lunch')}>
        Lunch
      </button>

      <button
        className='filter-btn'
        onClick={() => props.filterItems('shakes')}>
        Shakes
      </button> */}

    </div>
  )
};

export default Categories;
