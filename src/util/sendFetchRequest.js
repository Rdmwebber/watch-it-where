import apiOptions from "./api";

const getResults = async (title) => {
  let page = 1;
  let totalPages;
  let searchResults = [];

  const sendHttpRequest = async () => {
    if (page === 1 || page <= totalPages) {
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Capple&type=movie&order_by=imdb_vote_count&page=${page}&desc=true&language=en&keyword=${title}&output_language=en`,
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
      return searchResults.filter((res) =>
        res.title.toLowerCase().includes(title)
      );
    }
  };
  const filteredResults = await sendHttpRequest();

  // const titleFilteredData = searchResults.filter((res) =>
  //   res.title.toLowerCase().includes(title)
  // );
  console.log(searchResults);

  console.log(filteredResults);
  // console.log(titleFilteredData);

  // const response = await fetch(
  //   `https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Capple&type=movie&order_by=imdb_vote_count&page=${page}&desc=true&language=en&keyword=${title}&output_language=en`,
  //   options
  // );

  // if (!response.ok) {
  //   throw new Error("Something Went Wrong");
  // }

  // const data = await response.json();

  // const totalPages = data.total_pages;

  // const titleFilteredData = data.results.filter((res) =>
  //   res.title.toLowerCase().includes(title)
  // );

  // console.log(titleFilteredData);
};

export default getResults;
