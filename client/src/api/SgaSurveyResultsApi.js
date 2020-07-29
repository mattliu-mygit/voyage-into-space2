import { handleResponse, handleError } from './apiUtils';
// const baseUrl =
//   'http://localhost:' + (process.env.PORT || 8081) + '/api/SGASurveyResults/';
const baseUrl = 'https://jhu-help.herokuapp.com/api/SGASurveyResults';

export async function getData() {
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}

// export function saveData(data) {
//   return fetch(baseUrl + (data.id || ''), {
//     method: data.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//       ...data,
//       // Parse authorId to a number (in case it was sent as a string).
//       authorId: parseInt(data.authorId, 10),
//     }),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteData(dataId) {
//   return fetch(baseUrl + dataId, { method: 'DELETE' })
//     .then(handleResponse)
//     .catch(handleError);
// }
