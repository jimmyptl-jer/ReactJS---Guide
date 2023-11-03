import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState()
  const [isLoading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/places');

      if (!response) {
        throw new Error("Failed to load data");
      }
      const data = await response.json();
      setAvailablePlaces(data.places)

    } catch (error) {
      setError(error)
    }
  }


  useEffect(() => {
    setLoading(true)
    fetchData();
    setLoading(false)
  }, [])

  if (error) {
    return <Error title="Error Occurred" message={error.message}></Error>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
