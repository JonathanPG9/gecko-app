const callApi = async (hasItems,setData,setIsLoaded,condition) => {

  if(hasItems === 0 || condition) {
    let error;
    try {
      const callApi = await fetch('http://192.168.100.226:3001/api/dolar');
      if (callApi.status > 400) {
        error = 'Ha ocurrido un error'
        throw new Error
      };
      const response = await callApi.json();
      setData(response);
      console.log('Data was delivered');
    } catch(err) {
      console.error(err) // Tracking Error
      setData(error)
    } finally {
      if (error) return;
      setIsLoaded(true);
    }
    return;
  }

  console.log('Just was returned setIsLoaded')
  return setIsLoaded(true)
}

export default {
  callApi: callApi
}
