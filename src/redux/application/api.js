import axios from 'axios'; 
import { errorNotification } from '../store';
import { GET_SCHOOLS } from './action';


const api = (store) => (next) => async (action)  => {
  let response;
  async function post(url, body)  {
    try {
      const response = await axios.post(
        'http://collegeportalapi2.herokuapp.com' + url,
        body
      ); 
      return { bool: true, data: response.data};
    } catch (error) {
      errorNotification(error);
      console.error(error);
      return { bool: false }
    }
  }
  async function get(url)  {
    try {
      const response = await axios.get(
        'http://collegeportalapi2.herokuapp.com' + url, 
      ); 
      return { bool: true, data: response.data};
    } catch (error) {
      errorNotification(error);
      console.error(error);
      return { bool: false }
    }
  }

  switch (action.type) {
    case 'GET_SCHOOLS':
      response = await get('/baserecord/api/v1/schools');  
      action.payload = response && response.data && response.data.data;
      return next(action);
    case 'ADD_SCHOOL':
      await post('/baserecord/api/v1/schools', action.payload);  
      response = await get('/baserecord/api/v1/schools');
      action.type = 'GET_SCHOOLS'
      action.payload = response && response.data && response.data.data;
      return next(action);
    default:
      return next(action);
  }
};

export default  api;