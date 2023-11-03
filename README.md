// Import necessary dependencies from React
import { useEffect, useState } from 'react';

// Import the Places component
import Places from './Places.jsx';

// Define the AvailablePlaces component
export default function AvailablePlaces({ onSelectPlace }) {
  // Initialize state variables
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  // Define a function to fetch data from the server
  const fetchData = async () => {
    try {
      // Send a GET request to the server to fetch places
      const response = await fetch('http://localhost:3000/places');

      // Check if the response is successful
      if (!response) {
        throw new Error("Failed to load data");
      }

      // Parse the response data to extract the 'places' array
      const data = await response.json();
      setAvailablePlaces(data.places);

    } catch (error) {
      // Handle any errors that occur during the fetch
      setError(error);
    }
  }

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Set the loading state to true
    setLoading(true);

    // Call the fetchData function to fetch data
    fetchData();

    // Set the loading state to false
    setLoading(false);
  }, []);

  // If there is an error, render an error message
  if (error) {
    return <Error title="Error Occurred" message={error.message}></Error>;
  }

  // Render the Places component with the retrieved data
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
