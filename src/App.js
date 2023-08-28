import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [ tours,setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const fetchData = async()=>{
    setIsLoading(true);

    try {
    const response = await fetch(url);
    const tours = await response.json();

    setIsLoading(false);
    setTours(tours)
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button onClick={fetchData}>Refresh</button>
        </div>
      </main>
    )
  }

  return(
    <main>
      <Tours onClick={removeTour} toursList={tours}/>
    </main>
  )
}

export default App
