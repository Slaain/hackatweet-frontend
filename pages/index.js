import React, { useState, useEffect } from 'react';
import Landing from '../components/Landing';
import Home from '../components/Home';

function Index() {
  const [token, setToken] = useState(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setChargement(false);
  }, []);
  if (chargement) {
    return <div>Loading...</div>;
  }
  return token ? <Home /> : <Landing />;

  // return (
  //   <Landing />
  // )
}

export default Index;
