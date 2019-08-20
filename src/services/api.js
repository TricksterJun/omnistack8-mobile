import axios from 'axios';

const api = axios.create({
  //ip da maquina se estiver usando o celular!!
  // usar adb reverse tcp:3333 tcp:3333
  baseURL: 'http://localhost:3333'
});

export default api;