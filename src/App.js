import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';

import items from './data';

const allCategories = new Set(items.map((item)=> item.category));
const newCategories = ['all',...allCategories]

function App() {

  const [menuItems,setMenuItems] = useState(items);
  const [category,setCategory] = useState(newCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={category} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  );
}

export default App;
