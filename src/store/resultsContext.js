import React, { useState } from "react";

const ResultsContext = React.createContext({
  isLoading: false,
  searchResults: [],
  moreInfoItem: null,
  setMoreInfo: () => {},
  setResults: () => {},
  clearResults: () => {},
  setIsLoading: () => {},
});

export const ResultsContextProvider = (props) => {
  const [resultState, setResultState] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [moreInfo, setMoreInfoItem] = useState(null);

  const setMoreInfoHandler = (item) => {
    setMoreInfoItem(item);
  };

  const setResultsHandler = (result) => {
    setResultState(result);
  };

  const clearResultsHandler = () => {
    setResultState([]);
  };

  return (
    <ResultsContext.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        searchResults: resultState,
        moreInfo: moreInfo,
        setMoreInfo: setMoreInfoHandler,
        clearResults: clearResultsHandler,
        setResults: setResultsHandler,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};
export default ResultsContext;
