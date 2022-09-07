import { useState } from "react";

export const UsePlanet = () => {

  const [dataPlanet, setDataPlanet] = useState([]);

  const [Contador, setContador] = useState(1);

  const reducir = () => {
    if (Contador <= 1) {
      setContador (1);
    } else {

      setContador(Contador - 1);
    }
  };

  const aumentar = () => {
    if (Contador < 9) {
      setContador(Contador + 1);
    } else {
      setContador (9);
    }
  };



  const getAllPlanet = async(numberPage) => {
    try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`https://swapi.dev/api/planets/?page=${numberPage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataPlanet(result.results))
      .catch((error) => console.log("error", error));
  
    }  catch (error) {
      console.log(error);
    }
  };

  // const getOnePerson = async(id, state) => {
  //   try {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   await fetch(`https://swapi.dev/api/people/1`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setDataPeople(result.results))
  //     .catch((error) => console.log("error", error));
  
  //   }  catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    getAllPlanet,
    dataPlanet,
    Contador,
    reducir,
    aumentar
  };
};
