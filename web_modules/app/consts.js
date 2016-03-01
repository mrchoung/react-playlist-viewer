const fetchArtistsPopular = `https://api.themoviedb.org/3/person/popular`;
const fetchArtist = `https://api.themoviedb.org/3/person/`;
const apiKey = `d07241f7f943c6861fa0a520b52cc049`

export default {
  api:{
    enpoints:{
      getArtists:() =>{
        return fetchArtistsPopular+`?api_key=apiKey`
      },
      getArtist:(id)=>{
        return fetchArtist+`${id}?api_key=apiKey`
      },
      
    }
  }
}
