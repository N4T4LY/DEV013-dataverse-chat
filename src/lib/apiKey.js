export const getApiKey = (prompt) => {
    // Implementa el código para obtener la API KEY desde Local Storage
    const APIKEY = "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"
    console.log(APIKEY)
    const response = fetch(`https://api.openai.com/v1/chat/completions`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + APIKEY
        },
        body: JSON.stringify({
            model:'gpt-3.5-turbo',
            message: [
                {
                    "role":"system",
                    "content": prompt
                }
            ]
        })
    })
    return response;
 };
 export const setApiKey = (key) => {
   // Implementa el código para guardar la API KEY en Local Storage
 };