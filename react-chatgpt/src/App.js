import axios from "axios";
import { useState } from "react";
import Background from "./Background.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios.post("http://localhost:8081/chat", { prompt }).then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{
      background: `url(${Background})`,
      backgroundSize: "cover",
      height: "100vh",
    }}>
      <form style={{
      marginLeft:"150vh",
     paddingTop:"100px"
     

    }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p style={{
      marginLeft:"20vh",
     fontFamily:"monospace",
     color:"green"


    }}> {response} </p>
    </div>
  );
}

export default App;
