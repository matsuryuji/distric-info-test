import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3333`,
});
export default api;

export const getDistrictPopulation = async (id) => {
  return (await api.get(`/populacao_bairro?id_geometria=${id}`)).data;
};

export const getAllDistrictPopulation = async () => {
  return (await api.get(`/populacao_bairro`)).data;
};
