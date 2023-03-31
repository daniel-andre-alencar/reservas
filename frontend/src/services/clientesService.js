import axios from "axios";




var ClienteApi =  axios.get(`http://localhost:5000/clientes/${id}`);



var clienteservice = {
getclintes: async() => {
return await ClienteApi

}
}


export default ClienteApi;