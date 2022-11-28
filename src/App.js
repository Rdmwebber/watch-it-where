import classes from "./App.module.css";
import Form from "./components/Form";
import MediaList from "./components/MediaList";
import { useContext } from "react";
import ResultsContext from "./store/resultsContext";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Nav from "./components/UI/Nav";
import TypographyHeader from "./components/UI/TypographyHeader";

function App() {
  console.log("render app");
  const ctx = useContext(ResultsContext);
  const hasResults = !!ctx.searchResults.length;
  const isLoading = ctx.isLoading;

  return (
    <div className={classes.globalContainer}>
      <Nav />
      <TypographyHeader />
      <Form />
      {isLoading && <LoadingSpinner />}
      {/* {hasResults && <MediaList />} */}
      <MediaList />
    </div>
  );
}

export default App;
