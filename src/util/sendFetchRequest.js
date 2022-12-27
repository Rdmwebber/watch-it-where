import apiOptions from "./api";

const getResults = (title, ctx, mediaType) => {
  let page = 1;
  let totalPages;
  let searchResults = [];
  //I will be rewriting this whole function
  const sendHttpRequest = async () => {
    ctx.setIsLoading(true);
    if ((page === 1 || page <= totalPages) && page < 10) {
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Capple%2Ccrave&type=${mediaType}&order_by=imdb_vote_count&page=${page}&desc=true&language=en&keyword=${title}&output_language=en`,
        apiOptions
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const data = await response.json();

      searchResults.push(...data.results);

      totalPages = data.total_pages;

      page++;

      sendHttpRequest();
    } else {
      ctx.setIsLoading(false);

      ctx.setResults(
        searchResults.filter((res) => res.title.toLowerCase().includes(title))
      );
    }
  };

  try {
    sendHttpRequest();
  } catch (err) {
    console.log("ERROR", err);
  }

  console.log(searchResults);
};

export default getResults;
