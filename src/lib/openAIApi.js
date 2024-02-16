// import OpenAI from "openai";

// const openai = new OpenAI();
const communicateWithOpenAI = (messages) => {
    //Aquí es donde debes implementar la petición con fetch o axios
    const response = fetch(`https://api.openai.com/v1/chat/completions`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + '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'
        },
        body: JSON.stringify({
            model:'gpt-3.5-turbo',
            messages: [
                {
                    "role":"system",
                    "content":`Comportate como ${messages}`
                }
            ]
        })
    })
    return response;
 };

 console.log(communicateWithOpenAI("Charizard").then((res)=>{
    console.log(res.json().then((data) =>{
        console.log(data.choices[0].message)
    }).catch(() => {
        console.log("error")
    }))
 }))
 
 //Consumo de Promesas