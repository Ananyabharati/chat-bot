import { useState } from "react"
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

function Chatbot() {
    let [query, setQuery] = useState('');
    let [results, setResult] = useState('');
    const onChangehandle = (e) => { setQuery(e.target.value) }

    async function run() {
       
      setResult("searching")
        const result = await model.generateContent(query);
        const response = await result.response;
        const text = response.text();
        setResult(text);
      }
      
     

    return (


        <div>
            <h1>BOT</h1>
            <input
                value={query}
                onChange={onChangehandle}

                placeholder="type somethimg"
            />
            <button onClick={run}>Sumbit</button>
            {/* <pre >{results}</pre> */}
            {results.length>0?(<pre >{results}</pre>) : (<p>{results}</p>)}

        </div>

    )
}
export default Chatbot;