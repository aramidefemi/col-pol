import axios from 'axios';
import { errorNotification } from './redux/store';

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
async function put(url, body)  {
  try {
    const response = await axios.put(
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
async function deleteApi(url)  {
  try {
    const response = await axios.delete(
      'http://collegeportalapi2.herokuapp.com' + url, 
    ); 
    return { bool: true, data: response.data};
  } catch (error) {
    errorNotification(error);
    console.error(error);
    return { bool: false }
  }
}

export { post, get, deleteApi, put  };
