import React, { useState } from 'react'

import List from "./List"
import data from "./data"

const App = () => {

  const [peopleList,setPeopleList] = useState(data)

  const clickHandler =() =>{
    setPeopleList([]);
  }
  return (
    <main>
    <section className='container'>
      <h3>{data.length} Birthdays Today</h3>
      <List peopleList={peopleList}/>

      <button onClick={clickHandler}> Clear All</button>
    </section>
    </main>
  )
}

export default App