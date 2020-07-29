import { handleResponse, handleError } from './apiUtils';
// const baseUrl =
//   'http://localhost:' +
//   (process.env.PORT || 8081) +
//   '/api/covid-19resourceinsecurities/';
const baseUrl =
  'https://jhu-help.herokuapp.com/api/covid-19/resourceinsecurities/';

export async function getData() {
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}
