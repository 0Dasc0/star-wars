import React, { useEffect } from "react";
import { userPerson } from "../../Hooks/userPerson";

export const Personajes = () => {
  const { getAllPerson, dataPeople } = userPerson();

  useEffect(() => {
    getAllPerson();
    console.log(dataPeople);
  }, []);
};
