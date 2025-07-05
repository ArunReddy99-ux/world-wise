import { useState } from "react";

// Custom hook to handle geolocation logic
export function useGeolocation(defautPosition = null) {
  const [error, setError] = useState(null); // Stores any error messages
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state
  const [position, setPosition] = useState(defautPosition); // Stores latitude and longitude

  // Function to get the user's geolocation
  function getPosition() {
    if (!navigator.geolocation) {
      // If geolocation is not supported by the browser
      return setError("Your browser does not support geolocation");
    }
    setIsLoading(true); // Start loading
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // On success, update position state
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false); // Stop loading
      },
      (error) => {
        // On error, update error state
        setError(error.message);
        setIsLoading(false); // Stop loading
      }
    );
  }

  // Return the state and function to the component
  return { getPosition, error, isLoading, position };
}
