export const exerciseOptions =  {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
      'x-rapidapi-key': 'Sign Up for Key',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }