const devBaseURL = "https://autumnfish.cn";
const proBaseURL = "https://autumnfish.cn";
// const devBaseURL = "https://musicapi-opal.vercel.app";
// const proBaseURL = "https://musicapi-opal.vercel.app";
// const devBaseURL = "http://1.116.149.28:3000";
// const proBaseURL = "http://1.116.149.28:3000";


export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
