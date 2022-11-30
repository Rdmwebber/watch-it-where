import classes from "./App.module.css";
import Form from "./components/Form";
import MediaList from "./components/MediaList";
import { useContext } from "react";
import ResultsContext from "./store/resultsContext";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Nav from "./components/UI/Nav";
import TypographyHeader from "./components/UI/TypographyHeader";
import MoreInfo from "./components/MoreInfo";

function App() {
  console.log("render app");
  const ctx = useContext(ResultsContext);
  const hasResults = !!ctx.searchResults.length;
  const isLoading = ctx.isLoading;
  const moreInfoItem = ctx.moreInfo;
  // const

  return (
    <div className={classes.globalContainer}>
      <Nav />
      <TypographyHeader />
      {moreInfoItem ? <MoreInfo /> : <MediaList />}
      {/* <Form /> */}
      {isLoading && <LoadingSpinner />}
      {/* {hasResults && <MediaList />} */}
    </div>
  );
}

export default App;
