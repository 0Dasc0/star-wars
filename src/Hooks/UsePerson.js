import { useState } from "react";

export const UsePerson = () => {

  const [dataPeople, setDataPeople] = useState([]);
  const [DataDetalle, setDataDetalle] = useState([]);
  const [DataPeli, setDataPeli] = useState([]);

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



  const getAllPerson = async(numberPage) => {
    try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`https://swapi.dev/api/people/?page=${numberPage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataPeople(result.results))
      .catch((error) => console.log("error", error));
  
    }  catch (error) {
      console.log(error);
    }
  };


  const getDatallePersonaje = async (urlPersona)=>{
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        urlPersona,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataDetalle(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };


  const getDataPeli = async (urlPeli)=>{
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch (
        urlPeli,
        requestOptions
      )
      .then((response) => response.json())
      .then((result) => setDataPeli(result))
      .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  }

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
    getAllPerson,
    dataPeople,
    Contador,
    reducir,
    aumentar,
    getDatallePersonaje,
    DataDetalle,
    getDataPeli,
    DataPeli

  };
};
