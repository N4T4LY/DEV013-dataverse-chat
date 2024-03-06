export const getApiKey = () => {
  const APIKEYGET = localStorage.getItem("apiKey");
  return APIKEYGET;
};
export const setApiKey = (key) => {
  const APIKEY = localStorage.setItem("apiKey", key);
  return APIKEY;
};
