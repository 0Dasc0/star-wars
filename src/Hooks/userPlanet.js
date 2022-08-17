import { useState } from "react";

export const usePlanet = () => {

  const [dataPlanet, setDataPlanet] = useState([]);

  const getAllPlanet = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://swapi.dev/api/planets", requestOptions)
      .then(response => response.json())
      .then(result => setDataPlanet(result.results))
      .catch(error => console.log('error', error));
  };

  return {
    getAllPlanet,
    dataPlanet,
  };
};
