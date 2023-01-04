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

function App() {
  console.log("render app");
  const ctx = useContext(ResultsContext);
  const hasResults = !!ctx.searchResults.length;
  const isLoading = ctx.isLoading;
  const moreInfoItem = ctx.moreInfo;
  const firstLanding = ctx.isFirstLanding;

  return (
    <div>
      <Nav />
      <TypographyHeader />
      {firstLanding && <LandingPage />}
      {!firstLanding && !hasResults && !isLoading && <Form />}
      {isLoading && <LoadingSpinner />}
      {hasResults && !moreInfoItem && <MediaList />}
      {hasResults && moreInfoItem && <MoreInfo />}
    </div>
  );
}

export default App;
