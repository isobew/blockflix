import axios from "axios";


const API_KEY = 'fa58815b848f8c1770f6706db68c1f04';
const API_BASE = 'https://api.themoviedb.org/3'



const basicAxios = async (endpoint) => {
  const response =  await axios.get(`${API_BASE}${endpoint}`);
    return response.data;    
};


export default   {
  getHomeList: async () => {
      return [
          {
              category: 'Lançamentos',
              items: await basicAxios(`/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=7`)           
          },
      ]
  },

  
 getMovie: async (idMovie) => {
    const result = await axios.get(`${API_BASE}/movie/${idMovie}?api_key=${API_KEY}&language=pt-BR`);
    console.log(result.data + "olha aquidetalh")
    return result.data;
        
  },


 getMovieElenc: async (idMovie) => {
    const result = await axios.get(`${API_BASE}/movie/${idMovie}/credits?api_key=${API_KEY}&language=pt-BR`);
    console.log(result.data + "olha aquielenc")
    return result.data;
          
  },
  
 getMovieRecom: async (idMovie) => {
    const result = await axios.get(`${API_BASE}/movie/${idMovie}/recommendations?api_key=${API_KEY}&language=pt-BR`);
    console.log(result.data + "olha aquirecom")
    return result.data;             
           
  },

}
