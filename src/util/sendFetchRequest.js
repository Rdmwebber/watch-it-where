import apiOptions from "./api";

const fetchJson = async function (title, mediaType, page = 1) {
  try {
    const response = await fetch(
      `https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Capple%2Ccrave&type=${mediaType}&order_by=imdb_vote_count&page=${page}&desc=true&language=en&keyword=${title}&output_language=en`,
      apiOptions
    );
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("ERROR", err);
  }
};

const getResults = async function (title, mediaType) {
  try {
    //original fetch is sent seperately to determine the total number of pages available in results

    const preliminaryFetch = await fetchJson(title, mediaType);
    const totalPages = preliminaryFetch.total_pages;
    let arrayOfFetches = [];

    for (let i = 2; i <= totalPages; i++) {
      arrayOfFetches.push(fetchJson(title, mediaType, i));
    }
    const remainingResults = await Promise.all(arrayOfFetches);

    const combinedResults = [preliminaryFetch, ...remainingResults].flatMap(
      (item) => item.results
    );

    // filtered array of results to only return ones that include the submitted search value in the media title (too many results with keyword matches in descriptions)
    const filteredByTitle = combinedResults.filter((res) =>
      res.title.toLowerCase().includes(title)
    );
    return filteredByTitle;
  } catch (err) {
    console.log(err);
  }
};

export default getResults;
