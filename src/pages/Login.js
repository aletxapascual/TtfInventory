import React, {useEffect, useState} from 'react'

function Login() {
  const [number, setNumber] = useState(8733);
  const [data, setData]=useState([]);

  function getCodes(){
    fetch('https://script.google.com/macros/s/AKfycbw9W1Ctu9286GWSJf6Db2HyNY7gKzbjVLE3QvAompXgf8Gk3K902DiUIvH9nWSx9_v0zQ/exec')
    .then(response=>response.json())
    .then(response=>setData(response))
  }
  
  useEffect(()=>{ 
    getCodes()
  },[])

  useEffect(()=>{
    if(data.length > 0){
      console.log(data);
    }
  },[data])

  function clickLogin(){
    console.log(number)
    let matchingRow = null;
    for(let i = 0; i < data.length; i ++){ 
      if(number==data[i][0]){
        matchingRow = data[i];
        window.location.href = '/PrintableSheet?code='+number+'#'+matchingRow;
      }
    }
  }
    
    return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>

      </div>
      <button onClick={clickLogin}>Login</button>
    </div>
  );
}

export default Login