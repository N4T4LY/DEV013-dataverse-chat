export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    // const APIKEY = "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";
    const APIKEYGET = localStorage.getItem("apiKey");
    return APIKEYGET;
 };
 export const setApiKey = (key) => {
   // Implementa el código para guardar la API KEY en Local Storage
   const APIKEY = localStorage.setItem("apiKey",key);
   return APIKEY;

 };