import axios from 'axios';
import { get, deleteApi, post, put } from '../../http';

const api = (store) => (next) => async (action) => {
  let response;
  const baserRecordSchoolsUrl = '/baserecord/api/v1/schools/';

  switch (action.type) {
    case 'GET_SCHOOLS':
      response = await get(baserRecordSchoolsUrl);
      action.payload = response && response.data && response.data.data;
      return next(action);

    case 'ADD_SCHOOL':
      await post(baserRecordSchoolsUrl, action.payload);
      action.type = 'GET_SCHOOLS';
      return store.dispatch(action);

    case 'DELETE_SCHOOL':
      await deleteApi(baserRecordSchoolsUrl + action.payload.id);
      action.type = 'GET_SCHOOLS';
      return store.dispatch(action);

    case 'UPDATE_SCHOOL':
      await put(baserRecordSchoolsUrl + action.payload.id, action.payload);
      return next(action);

    case 'A_SCHOOL':
      response = await get(baserRecordSchoolsUrl + action.payload.id); 
      action.type = 'SELECT_SCHOOL';
      action.payload = response && response.data && response.data.data;
      return next(action);
      
    default:
      return next(action);
  }
};

export default api;
