import React, {createContext, useLayoutEffect} from 'react';
import Utils from '../utils/utils';

export const DataLoad = createContext();

const DataLoadContext = ({children, data, setData, isLoaded, setIsLoaded}) => {

  useLayoutEffect(() => { 
    Utils.callApi(data.length, setData, setIsLoaded, false);
  },[])

  const dataLoadValues = {
    data,
    isLoaded,
    setData,
    setIsLoaded,
    callApi: Utils.callApi
  }

  return(
    <DataLoad.Provider value={dataLoadValues}>
      {children}
    </DataLoad.Provider>
  )
};

export default DataLoadContext;
