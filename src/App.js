// import classes from "./App.module.css";
import Form from "./components/Form";
import MediaList from "./components/MediaList";
import { useContext } from "react";
import ResultsContext from "./store/resultsContext";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Nav from "./components/UI/Nav";
import TypographyHeader from "./components/UI/TypographyHeader";
import MoreInfo from "./components/MoreInfo";
import LandingPage from "./components/LandingPage";
import { AnimatePresence } from "framer-motion";

function App() {
  console.log("render app");
  const ctx = useContext(ResultsContext);
  // const hasResults = !!ctx.searchResults.length;
  const isLoading = ctx.isLoading;
  // const moreInfoItem = !!ctx.moreInfo.length;
  const showMoreInfo = ctx.showMoreInfo;
  const showResults = ctx.showResults;
  const firstLanding = ctx.isFirstLanding;

  return (
    <div>
      {/* <Nav />
      <TypographyHeader />
      <AnimatePresence>{firstLanding && <LandingPage />}</AnimatePresence>
      <AnimatePresence mode="wait">
        {!firstLanding && !showResults && !showMoreInfo && !isLoading && (
          <Form />
        )}
      </AnimatePresence>
      {isLoading && <LoadingSpinner />}
      <AnimatePresence>{showResults && <MediaList />}</AnimatePresence>
      <AnimatePresence>{showMoreInfo && <MoreInfo />}</AnimatePresence>
       */}

      <Nav />
      <TypographyHeader />
      <AnimatePresence wait="true">
        {firstLanding && <LandingPage />}

        {!firstLanding && !showResults && !showMoreInfo && !isLoading && (
          <Form />
        )}

        {isLoading && <LoadingSpinner />}
        {showResults && <MediaList />}
        {showMoreInfo && <MoreInfo />}
      </AnimatePresence>
    </div>
  );
}

export default App;
