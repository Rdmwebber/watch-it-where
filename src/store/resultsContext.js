import React, { useState } from "react";

const ResultsContext = React.createContext({
  isFirstLanding: true,
  isLoading: false,
  searchResults: [],
  moreInfo: [],
  showResults: false,
  showMoreInfo: false,
  setMoreInfo: () => {},
  setShowMoreInfo: () => {},
  setShowResults: () => {},
  setResults: () => {},
  clearResults: () => {},
  setIsLoading: () => {},
  setIsFirstLanding: () => {},
});

export const ResultsContextProvider = (props) => {
  const [resultState, setResultState] = useState([]);

  const [showResults, setShowResults] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [moreInfo, setMoreInfoItem] = useState([]);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const [isFirstLanding, setIsFirstLanding] = useState(true);

  const setMoreInfoHandler = (item) => {
    setMoreInfoItem(item);
  };

  const setShowMoreInfoHandler = (value) => {
    setShowMoreInfo(value);
  };

  const setResultsHandler = (result) => {
    setResultState(result);
  };

  const setShowResultsHandler = (value) => {
    setShowResults(value);
  };

  const clearResultsHandler = () => {
    setResultState([]);
  };

  const setIsFirstLandingHandler = (value) => {
    setIsFirstLanding(value);
  };

  return (
    <ResultsContext.Provider
      value={{
        isLoading: isLoading,
        searchResults: resultState,
        showResults: showResults,
        moreInfo: moreInfo,
        showMoreInfo: showMoreInfo,
        isFirstLanding: isFirstLanding,
        setIsLoading: setIsLoading,
        setMoreInfo: setMoreInfoHandler,
        setShowMoreInfo: setShowMoreInfoHandler,
        clearResults: clearResultsHandler,
        setResults: setResultsHandler,
        setShowResults: setShowResultsHandler,
        setIsFirstLanding: setIsFirstLandingHandler,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};
export default ResultsContext;
