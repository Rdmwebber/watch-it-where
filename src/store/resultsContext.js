import React, { useState } from "react";

const ResultsContext = React.createContext({
  isFirstLanding: true,
  isLoading: false,
  searchResults: [],
  moreInfo: null,
  setMoreInfo: () => {},
  setResults: () => {},
  clearResults: () => {},
  setIsLoading: () => {},
  setIsFirstLanding: () => {},
});

export const ResultsContextProvider = (props) => {
  const [resultState, setResultState] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [moreInfo, setMoreInfoItem] = useState(null);

  const [isFirstLanding, setIsFirstLanding] = useState(true);

  const setMoreInfoHandler = (item) => {
    setMoreInfoItem(item);
  };

  const setResultsHandler = (result) => {
    setResultState(result);
  };

  const clearResultsHandler = () => {
    setResultState([]);
  };

  const setIsFirstLandingHandler = () => {
    setIsFirstLanding(false);
  };

  return (
    <ResultsContext.Provider
      value={{
        isLoading: isLoading,
        searchResults: resultState,
        moreInfo: moreInfo,
        isFirstLanding: isFirstLanding,
        setIsLoading: setIsLoading,
        setMoreInfo: setMoreInfoHandler,
        clearResults: clearResultsHandler,
        setResults: setResultsHandler,
        setIsFirstLanding: setIsFirstLandingHandler,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};
export default ResultsContext;
