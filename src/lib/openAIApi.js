const openAI = require('openai');
const openai = new openAI();
export const communicateWithOpenAI = (messages) => {
    //Aquí es donde debes implementar la petición con fetch o axios
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
                    "content": messages
                }
            ]
        })
    })
    return response;
 };
 