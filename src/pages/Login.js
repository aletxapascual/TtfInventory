import React, {useEffect, useState} from 'react'
import backgroundImage from '../images/login.png'; 

function Login() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const [number4, setNumber4] = useState();
  var total= number1+number2+number3+number4

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
    console.log(total)
    let matchingRow = null;
    for(let i = 0; i < data.length; i ++){ 
      if(total==data[i][0]){
        matchingRow = data[i];
        window.location.href = '/PrintableSheet?code='+total+'#'+matchingRow;
      }
    }
  }

     
    return (
    <div className='outer-container'>
    <div className='login-container'>
      <h1 className='login-title'>Customers</h1>
      <div className='instructions'>Enter you 4-digit access code</div>
      <section className='numberBoxes'>
        <div className='number'>
          <input
            type='number'
            value={number1}
            maxLength='1'
            onChange={(e) => setNumber1(e.target.value.slice(0, 1))}
            className='access-code-input' 
          />
        </div>
        <div className='number'>
          <input
            type='number'
            value={number2}
            maxLength='1'
            onChange={(e) => setNumber2(e.target.value.slice(0, 1))}
            className='access-code-input' 
          />
        </div>
        <div className='number'>
          <input
            type='number'
            value={number3}
            maxLength='1'
            onChange={(e) => setNumber3(e.target.value.slice(0, 1))}
            className='access-code-input' 
          />
        </div>
        <div className='number'>
          <input
            type='number'
            value={number4}
            maxLength='1'
            onChange={(e) => setNumber4(e.target.value.slice(0, 1))}
            className='access-code-input' 
          />
        </div>
        
      </section>
      
      <button onClick={clickLogin} className='login-button'>Login</button>
    </div>
    <div className='background-container'>
      <img src={backgroundImage} onLoad={getCodes} ></img>
    </div>
    </div>
  );

}

export default Login