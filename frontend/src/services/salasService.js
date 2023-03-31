import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/
var salaAPI = await axios.get('http://localhost:5000/salas');

var salasService = {
  getSalas: async () => {
    return await salaAPI;
  },
};

export default salasService;