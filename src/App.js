import React,{useState} from 'react';
import './App.css'
import axios from 'axios';

function App() {

 

  const [photo,setPhoto] = useState("");
  const [clienteId,setClienteId] = useState("F-60A9iWEb7a_8Adig7r0I2Tons13RF-tXE70xIIPZ0");
  const [result,setResult] = useState([]);



  function handleChange(e){
    setPhoto(e.target.value);

  }

  function handleSubmit(){
    console.log(photo)
    
    const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}"&client_id=${clienteId}`;

    axios.get(url)
              .then((response)=>{
                console.log(response);
                setResult(response.data.results);
              }) 
  }


  return (
    <div className="App">

        <h1>Unsplash Search Photo</h1>

          <input
              type="text"
              placeholder="Search for photo.."  
              onChange={handleChange}    
          />

          <button onClick={handleSubmit} type="submit">
             Search
          </button>
          <hr/>
       
          
          <section className="photo">
          {
              result.map(photo =>(
                <img src={photo.urls.small}/>
            ))
          }
          </section>
          
        
      
    </div>
  );
}

export default App;
