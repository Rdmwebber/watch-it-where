import netflixLogo from "../assets/Netflix.svg";
import primeLogo from "../assets/Prime.svg";
import appleTvLogo from "../assets/AppleTV.svg";
import craveLogo from "../assets/Crave.svg";
import disneyLogo from "../assets/Disney.svg";

const checkStreamingService = (service) => {
  if (service.hasOwnProperty("disney")) {
    return { streamingLogo: disneyLogo, streamingLink: service.disney.ca.link };
  } else if (service.hasOwnProperty("netflix")) {
    return {
      streamingLogo: netflixLogo,
      streamingLink: service.netflix.ca.link,
    };
  } else if (service.hasOwnProperty("crave")) {
    return { streamingLogo: craveLogo, streamingLink: service.crave.ca.link };
  } else if (service.hasOwnProperty("apple")) {
    return { streamingLogo: appleTvLogo, streamingLink: service.apple.ca.link };
  } else if (service.hasOwnProperty("prime")) {
    return { streamingLogo: primeLogo, streamingLink: service.prime.ca.link };
  }
};

export default checkStreamingService;
