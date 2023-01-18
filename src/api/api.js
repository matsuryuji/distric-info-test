import axios from "axios";

export const getDistrictPopulation = async (id) => {
  return (await axios.get(`http://localhost:3333/populacao_bairro?id_geometria=${id}`)).data;
};

export const getAllDistrictPopulation = async () => {
  return (await axios.get(`http://localhost:3333/populacao_bairro`)).data;
};

export const getAllDistrictGeoLocation = async () => {
    return (await axios.get(`http://localhost:4444/geometrias`)).data;
  };
  