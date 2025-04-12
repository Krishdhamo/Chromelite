import { useState } from "react";
import "./App.css";
// import { response } from "express";

function App() {
  const [text,setText] = useState("");
  const [results,setResult] = useState([]);
  return <>
  <h1>Chrome lite search engine</h1>
  <input placeholder="Enter search text "
  value={text}
  onChange={(e) => setText(e.target.value)}
  />
  <button
  onClick={() => {
    fetch("/api/search?text=" + text)
    .then((response) => {
      response
       .json()
       .then((results) => setResult(results))
       .catch((error) => console.error("Failed to search!",error));
    })
    .catch((error) => console.error("Failed to search!",error));
  }}
  >Search
  </button>
  <ul type="none">
      {
          results.map((item, index) => (
            <li  key={index}>
              <a class="list" href={item.url} target="_blank">
                {item.title}
                {item.url}
              </a>
            </li>
          ))         
        }
      </ul>


  {/* 
   <input type="text" placeholder="Enter to search:" required/>
   <button type = "submit">Search</button> */}

  </>
}

export default App;
