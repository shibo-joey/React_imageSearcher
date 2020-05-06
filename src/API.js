const API_URL = 'your api'
const Api = (searchTerm) => {

        const url = `${API_URL}&term=${searchTerm}`;
        return fetch(url)
          .then(response => response.json())
          .then(result => {
            return result.photos;
          });
      
}
 
export default Api;