const callApi = async (itemLength,setData,setIsLoaded,condition) => {

  if(itemLength === 0 || condition) {
    let errorMsg;
    try {
      const request = await fetch('http://192.168.100.60:3001/api/dolar'); // Comprobar IP antes de ejecutar
      if (request.status >= 400) {
        errorMsg = 'Ha ocurrido un error'
        throw new Error
      };
      const response = await request.json();
      setData(response);
      console.log('Data was delivered');
    } catch(err) {
      console.error(err) // Tracking Error
      setData(errorMsg)
    } finally {
      if (errorMsg) return;
      setIsLoaded(true);
    }
    return;
  }

  console.log('Just was returned setIsLoaded')
  return setIsLoaded(true)
}

export default {
  callApi
}
